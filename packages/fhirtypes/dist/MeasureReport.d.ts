/*
 * This is a generated file
 * Do not edit manually.
 */

import { CareTeam } from './CareTeam';
import { CodeableConcept } from './CodeableConcept';
import { Device } from './Device';
import { Extension } from './Extension';
import { Group } from './Group';
import { HealthcareService } from './HealthcareService';
import { Identifier } from './Identifier';
import { List } from './List';
import { Location } from './Location';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';

/**
 * The MeasureReport resource contains the results of the calculation of
 * a measure; and optionally a reference to the resources involved in
 * that calculation.
 */
export interface MeasureReport {

  /**
   * This is a MeasureReport resource
   */
  readonly resourceType: 'MeasureReport';

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
   * A formal identifier that is used to identify this MeasureReport when
   * it is represented in other formats or referenced in a specification,
   * model, design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The MeasureReport status. No data will be available until the
   * MeasureReport status is complete.
   */
  status: 'complete' | 'pending' | 'error';

  /**
   * The type of measure report. This may be an individual report, which
   * provides the score for the measure for an individual member of the
   * population; a subject-listing, which returns the list of members that
   * meet the various criteria in the measure; a summary report, which
   * returns a population count for each of the criteria in the measure; or
   * a data-collection, which enables the MeasureReport to be used to
   * exchange the data-of-interest for a quality measure.
   */
  type: 'individual' | 'subject-list' | 'summary' | 'data-collection';

  /**
   * A reference to the Measure that was calculated to produce this report.
   */
  measure: string;

  /**
   * Optional subject identifying the individual or individuals the report
   * is for.
   */
  subject?: Reference<Patient | Practitioner | PractitionerRole | Location | Device | RelatedPerson | Organization | CareTeam | HealthcareService | Group>;

  /**
   * The date this measure report was generated.
   */
  date?: string;

  /**
   * The individual, location, or organization that is reporting the data.
   */
  reporter?: Reference<Practitioner | PractitionerRole | Location | Organization>;

  /**
   * The reporting period for which the report was calculated.
   */
  period: Period;

  /**
   * Whether improvement in the measure is noted by an increase or decrease
   * in the measure score.
   */
  improvementNotation?: CodeableConcept;

  /**
   * The results of the calculation, one for each population group in the
   * measure.
   */
  group?: MeasureReportGroup[];

  /**
   * A reference to a Bundle containing the Resources that were used in the
   * calculation of this measure.
   */
  evaluatedResource?: Reference<Resource>[];
}

/**
 * The results of the calculation, one for each population group in the
 * measure.
 */
export interface MeasureReportGroup {

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
   * The meaning of the population group as defined in the measure
   * definition.
   */
  code?: CodeableConcept;

  /**
   * The populations that make up the population group, one for each type
   * of population appropriate for the measure.
   */
  population?: MeasureReportGroupPopulation[];

  /**
   * The measure score for this population group, calculated as appropriate
   * for the measure type and scoring method, and based on the contents of
   * the populations defined in the group.
   */
  measureScore?: Quantity;

  /**
   * When a measure includes multiple stratifiers, there will be a
   * stratifier group for each stratifier defined by the measure.
   */
  stratifier?: MeasureReportGroupStratifier[];
}

/**
 * The populations that make up the population group, one for each type
 * of population appropriate for the measure.
 */
export interface MeasureReportGroupPopulation {

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
   * The type of the population.
   */
  code?: CodeableConcept;

  /**
   * The number of members of the population.
   */
  count?: number;

  /**
   * This element refers to a List of subject level MeasureReport
   * resources, one for each subject in this population.
   */
  subjectResults?: Reference<List>;
}

/**
 * When a measure includes multiple stratifiers, there will be a
 * stratifier group for each stratifier defined by the measure.
 */
export interface MeasureReportGroupStratifier {

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
   * The meaning of this stratifier, as defined in the measure definition.
   */
  code?: CodeableConcept[];

  /**
   * This element contains the results for a single stratum within the
   * stratifier. For example, when stratifying on administrative gender,
   * there will be four strata, one for each possible gender value.
   */
  stratum?: MeasureReportGroupStratifierStratum[];
}

/**
 * This element contains the results for a single stratum within the
 * stratifier. For example, when stratifying on administrative gender,
 * there will be four strata, one for each possible gender value.
 */
export interface MeasureReportGroupStratifierStratum {

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
   * The value for this stratum, expressed as a CodeableConcept. When
   * defining stratifiers on complex values, the value must be rendered
   * such that the value for each stratum within the stratifier is unique.
   */
  value?: CodeableConcept;

  /**
   * A stratifier component value.
   */
  component?: MeasureReportGroupStratifierStratumComponent[];

  /**
   * The populations that make up the stratum, one for each type of
   * population appropriate to the measure.
   */
  population?: MeasureReportGroupStratifierStratumPopulation[];

  /**
   * The measure score for this stratum, calculated as appropriate for the
   * measure type and scoring method, and based on only the members of this
   * stratum.
   */
  measureScore?: Quantity;
}

/**
 * A stratifier component value.
 */
export interface MeasureReportGroupStratifierStratumComponent {

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
   * The code for the stratum component value.
   */
  code: CodeableConcept;

  /**
   * The stratum component value.
   */
  value: CodeableConcept;
}

/**
 * The populations that make up the stratum, one for each type of
 * population appropriate to the measure.
 */
export interface MeasureReportGroupStratifierStratumPopulation {

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
   * The type of the population.
   */
  code?: CodeableConcept;

  /**
   * The number of members of the population in this stratum.
   */
  count?: number;

  /**
   * This element refers to a List of subject level MeasureReport
   * resources, one for each subject in this population in this stratum.
   */
  subjectResults?: Reference<List>;
}
