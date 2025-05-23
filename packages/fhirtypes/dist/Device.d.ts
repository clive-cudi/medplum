/*
 * This is a generated file
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { DeviceDefinition } from './DeviceDefinition';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * A type of a manufactured item that is used in the provision of
 * healthcare without being substantially changed through that activity.
 * The device may be a medical or non-medical device.
 */
export interface Device {

  /**
   * This is a Device resource
   */
  readonly resourceType: 'Device';

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
   * Unique instance identifiers assigned to a device by manufacturers
   * other organizations or owners.
   */
  identifier?: Identifier[];

  /**
   * The reference to the definition for the device.
   */
  definition?: Reference<DeviceDefinition>;

  /**
   * Unique device identifier (UDI) assigned to device label or package.
   * Note that the Device may include multiple udiCarriers as it either may
   * include just the udiCarrier for the jurisdiction it is sold, or for
   * multiple jurisdictions it could have been sold.
   */
  udiCarrier?: DeviceUdiCarrier[];

  /**
   * Status of the Device availability.
   */
  status?: 'active' | 'inactive' | 'entered-in-error' | 'unknown';

  /**
   * Reason for the dtatus of the Device availability.
   */
  statusReason?: CodeableConcept[];

  /**
   * The distinct identification string as required by regulation for a
   * human cell, tissue, or cellular and tissue-based product.
   */
  distinctIdentifier?: string;

  /**
   * A name of the manufacturer.
   */
  manufacturer?: string;

  /**
   * The date and time when the device was manufactured.
   */
  manufactureDate?: string;

  /**
   * The date and time beyond which this device is no longer valid or
   * should not be used (if applicable).
   */
  expirationDate?: string;

  /**
   * Lot number assigned by the manufacturer.
   */
  lotNumber?: string;

  /**
   * The serial number assigned by the organization when the device was
   * manufactured.
   */
  serialNumber?: string;

  /**
   * This represents the manufacturer's name of the device as provided by
   * the device, from a UDI label, or by a person describing the Device.
   * This typically would be used when a person provides the name(s) or
   * when the device represents one of the names available from
   * DeviceDefinition.
   */
  deviceName?: DeviceDeviceName[];

  /**
   * The model number for the device.
   */
  modelNumber?: string;

  /**
   * The part number of the device.
   */
  partNumber?: string;

  /**
   * The kind or type of device.
   */
  type?: CodeableConcept;

  /**
   * The capabilities supported on a  device, the standards to which the
   * device conforms for a particular purpose, and used for the
   * communication.
   */
  specialization?: DeviceSpecialization[];

  /**
   * The actual design of the device or software version running on the
   * device.
   */
  version?: DeviceVersion[];

  /**
   * The actual configuration settings of a device as it actually operates,
   * e.g., regulation status, time properties.
   */
  property?: DeviceProperty[];

  /**
   * Patient information, If the device is affixed to a person.
   */
  patient?: Reference<Patient>;

  /**
   * An organization that is responsible for the provision and ongoing
   * maintenance of the device.
   */
  owner?: Reference<Organization>;

  /**
   * Contact details for an organization or a particular human that is
   * responsible for the device.
   */
  contact?: ContactPoint[];

  /**
   * The place where the device can be found.
   */
  location?: Reference<Location>;

  /**
   * A network address on which the device may be contacted directly.
   */
  url?: string;

  /**
   * Descriptive information, usage information or implantation information
   * that is not captured in an existing element.
   */
  note?: Annotation[];

  /**
   * Provides additional safety characteristics about a medical device.
   * For example devices containing latex.
   */
  safety?: CodeableConcept[];

  /**
   * The parent device.
   */
  parent?: Reference<Device>;
}

/**
 * This represents the manufacturer's name of the device as provided by
 * the device, from a UDI label, or by a person describing the Device.
 * This typically would be used when a person provides the name(s) or
 * when the device represents one of the names available from
 * DeviceDefinition.
 */
export interface DeviceDeviceName {

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
   * The name of the device.
   */
  name: string;

  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName |
   * ManufactureDeviceName | ModelName.
   */
  type: 'udi-label-name' | 'user-friendly-name' | 'patient-reported-name' | 'manufacturer-name' | 'model-name' | 'other';
}

/**
 * The actual configuration settings of a device as it actually operates,
 * e.g., regulation status, time properties.
 */
export interface DeviceProperty {

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
   * Code that specifies the property DeviceDefinitionPropetyCode
   * (Extensible).
   */
  type: CodeableConcept;

  /**
   * Property value as a quantity.
   */
  valueQuantity?: Quantity[];

  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  valueCode?: CodeableConcept[];
}

/**
 * The capabilities supported on a  device, the standards to which the
 * device conforms for a particular purpose, and used for the
 * communication.
 */
export interface DeviceSpecialization {

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
   * The standard that is used to operate and communicate.
   */
  systemType: CodeableConcept;

  /**
   * The version of the standard that is used to operate and communicate.
   */
  version?: string;
}

/**
 * Unique device identifier (UDI) assigned to device label or package.
 * Note that the Device may include multiple udiCarriers as it either may
 * include just the udiCarrier for the jurisdiction it is sold, or for
 * multiple jurisdictions it could have been sold.
 */
export interface DeviceUdiCarrier {

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
   * The device identifier (DI) is a mandatory, fixed portion of a UDI that
   * identifies the labeler and the specific version or model of a device.
   */
  deviceIdentifier?: string;

  /**
   * Organization that is charged with issuing UDIs for devices.  For
   * example, the US FDA issuers include :
   * 1) GS1:
   * http://hl7.org/fhir/NamingSystem/gs1-di,
   * 2) HIBCC:
   * http://hl7.org/fhir/NamingSystem/hibcc-dI,
   * 3) ICCBBA for blood containers:
   * http://hl7.org/fhir/NamingSystem/iccbba-blood-di,
   * 4) ICCBA for other devices:
   * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
   */
  issuer?: string;

  /**
   * The identity of the authoritative source for UDI generation within a
   * jurisdiction.  All UDIs are globally unique within a single namespace
   * with the appropriate repository uri as the system.  For example,  UDIs
   * of devices managed in the U.S. by the FDA, the value is
   * http://hl7.org/fhir/NamingSystem/fda-udi.
   */
  jurisdiction?: string;

  /**
   * The full UDI carrier of the Automatic Identification and Data Capture
   * (AIDC) technology representation of the barcode string as printed on
   * the packaging of the device - e.g., a barcode or RFID.   Because of
   * limitations on character sets in XML and the need to round-trip JSON
   * data through XML, AIDC Formats *SHALL* be base64 encoded.
   */
  carrierAIDC?: string;

  /**
   * The full UDI carrier as the human readable form (HRF) representation
   * of the barcode string as printed on the packaging of the device.
   */
  carrierHRF?: string;

  /**
   * A coded entry to indicate how the data was entered.
   */
  entryType?: 'barcode' | 'rfid' | 'manual' | 'card' | 'self-reported' | 'unknown';
}

/**
 * The actual design of the device or software version running on the
 * device.
 */
export interface DeviceVersion {

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
   * The type of the device version.
   */
  type?: CodeableConcept;

  /**
   * A single component of the device version.
   */
  component?: Identifier;

  /**
   * The version text.
   */
  value: string;
}
