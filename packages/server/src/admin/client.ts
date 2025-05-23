import { createReference, WithId } from '@medplum/core';
import {
  AccessPolicy,
  ClientApplication,
  IdentityProvider,
  Project,
  ProjectMembership,
  Reference,
} from '@medplum/fhirtypes';
import { Request, Response } from 'express';
import { body } from 'express-validator';
import { getAuthenticatedContext } from '../context';
import { getSystemRepo, Repository } from '../fhir/repo';
import { generateSecret } from '../oauth/keys';
import { makeValidationMiddleware } from '../util/validator';

export const createClientValidator = makeValidationMiddleware([
  body('name').notEmpty().withMessage('Client name is required'),
]);

export async function createClientHandler(req: Request, res: Response): Promise<void> {
  let project: Project;
  const { project: localsProject, repo } = getAuthenticatedContext();
  if (localsProject.superAdmin) {
    project = { resourceType: 'Project', id: req.params.projectId };
  } else {
    project = localsProject;
  }

  const client = await createClient(repo, {
    ...req.body,
    project,
  });

  res.status(201).json(client);
}

export interface CreateClientRequest {
  readonly project: Project;
  readonly name: string;
  readonly description?: string;
  readonly redirectUri?: string;
  readonly accessPolicy?: Reference<AccessPolicy>;
  readonly identityProvider?: IdentityProvider;
  readonly accessTokenLifetime?: string;
  readonly refreshTokenLifetime?: string;
}

export async function createClient(repo: Repository, request: CreateClientRequest): Promise<WithId<ClientApplication>> {
  const systemRepo = getSystemRepo();
  const client = await systemRepo.createResource<ClientApplication>({
    meta: {
      project: request.project.id,
      author: repo.getConfig().author,
    },
    resourceType: 'ClientApplication',
    name: request.name,
    secret: generateSecret(32),
    description: request.description,
    redirectUri: request.redirectUri,
    identityProvider: request.identityProvider,
    accessTokenLifetime: request.accessTokenLifetime,
    refreshTokenLifetime: request.refreshTokenLifetime,
  });

  await systemRepo.createResource<ProjectMembership>({
    meta: {
      project: request.project.id,
    },
    resourceType: 'ProjectMembership',
    project: createReference(request.project),
    user: createReference(client),
    profile: createReference(client),
    accessPolicy: request.accessPolicy,
  });

  return client;
}
