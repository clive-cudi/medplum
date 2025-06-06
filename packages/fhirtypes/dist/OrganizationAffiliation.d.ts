/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { Endpoint } from './Endpoint';
import { Extension } from './Extension';
import { HealthcareService } from './HealthcareService';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Period } from './Period';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * Defines an affiliation/assotiation/relationship between 2 distinct
 * oganizations, that is not a part-of relationship/sub-division
 * relationship.
 */
export interface OrganizationAffiliation {

  /**
   * This is a OrganizationAffiliation resource
   */
  readonly resourceType: 'OrganizationAffiliation';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Business identifiers that are specific to this role.
   */
  identifier?: Identifier[];

  /**
   * Whether this organization affiliation record is in active use.
   */
  active?: boolean;

  /**
   * The period during which the participatingOrganization is affiliated
   * with the primary organization.
   */
  period?: Period;

  /**
   * Organization where the role is available (primary organization/has
   * members).
   */
  organization?: Reference<Organization>;

  /**
   * The Participating Organization provides/performs the role(s) defined
   * by the code to the Primary Organization (e.g. providing services or is
   * a member of).
   */
  participatingOrganization?: Reference<Organization>;

  /**
   * Health insurance provider network in which the
   * participatingOrganization provides the role's services (if defined) at
   * the indicated locations (if defined).
   */
  network?: Reference<Organization>[];

  /**
   * Definition of the role the participatingOrganization plays in the
   * association.
   */
  code?: CodeableConcept[];

  /**
   * Specific specialty of the participatingOrganization in the context of
   * the role.
   */
  specialty?: CodeableConcept[];

  /**
   * The location(s) at which the role occurs.
   */
  location?: Reference<Location>[];

  /**
   * Healthcare services provided through the role.
   */
  healthcareService?: Reference<HealthcareService>[];

  /**
   * Contact details at the participatingOrganization relevant to this
   * Affiliation.
   */
  telecom?: ContactPoint[];

  /**
   * Technical endpoints providing access to services operated for this
   * role.
   */
  endpoint?: Reference<Endpoint>[];
}
