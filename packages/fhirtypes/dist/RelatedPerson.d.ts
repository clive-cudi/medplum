/*
 * This is a generated file
 * Do not edit manually.
 */

import { Address } from './Address';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { Extension } from './Extension';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Patient } from './Patient';
import { Period } from './Period';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * Information about a person that is involved in the care for a patient,
 * but who is not the target of healthcare, nor has a formal
 * responsibility in the care process.
 */
export interface RelatedPerson {

  /**
   * This is a RelatedPerson resource
   */
  readonly resourceType: 'RelatedPerson';

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
   * Identifier for a person within a particular scope.
   */
  identifier?: Identifier[];

  /**
   * Whether this related person record is in active use.
   */
  active?: boolean;

  /**
   * The patient this person is related to.
   */
  patient: Reference<Patient>;

  /**
   * The nature of the relationship between a patient and the related
   * person.
   */
  relationship?: CodeableConcept[];

  /**
   * A name associated with the person.
   */
  name?: HumanName[];

  /**
   * A contact detail for the person, e.g. a telephone number or an email
   * address.
   */
  telecom?: ContactPoint[];

  /**
   * Administrative Gender - the gender that the person is considered to
   * have for administration and record keeping purposes.
   */
  gender?: 'male' | 'female' | 'other' | 'unknown';

  /**
   * The date on which the related person was born.
   */
  birthDate?: string;

  /**
   * Address where the related person can be contacted or visited.
   */
  address?: Address[];

  /**
   * Image of the person.
   */
  photo?: Attachment[];

  /**
   * The period of time during which this relationship is or was active. If
   * there are no dates defined, then the interval is unknown.
   */
  period?: Period;

  /**
   * A language which may be used to communicate with about the patient's
   * health.
   */
  communication?: RelatedPersonCommunication[];
}

/**
 * A language which may be used to communicate with about the patient's
 * health.
 */
export interface RelatedPersonCommunication {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The ISO-639-1 alpha 2 code in lower case for the language, optionally
   * followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in
   * upper case; e.g. &quot;en&quot; for English, or &quot;en-US&quot; for American English
   * versus &quot;en-EN&quot; for England English.
   */
  language: CodeableConcept;

  /**
   * Indicates whether or not the patient prefers this language (over other
   * languages he masters up a certain level).
   */
  preferred?: boolean;
}
