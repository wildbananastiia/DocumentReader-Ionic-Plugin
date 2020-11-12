import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var Scenario = /** @class */ (function () {
    function Scenario() {
    }
    Scenario.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Scenario;
        result.frame = jsonObject["frame"];
        result.frameOrientation = jsonObject["frameOrientation"];
        result.uvTorch = jsonObject["uvTorch"];
        result.barcodeExt = jsonObject["barcodeExt"];
        result.faceExt = jsonObject["faceExt"];
        result.multiPageOff = jsonObject["multiPageOff"];
        result.seriesProcessMode = jsonObject["seriesProcessMode"];
        result.frameKWHLandscape = jsonObject["frameKWHLandscape"];
        result.frameKWHPortrait = jsonObject["frameKWHPortrait"];
        result.frameKWHDoublePageSpreadPortrait = jsonObject["frameKWHDoublePageSpreadPortrait"];
        result.frameKWHDoublePageSpreadLandscape = jsonObject["frameKWHDoublePageSpreadLandscape"];
        result.name = jsonObject["name"];
        result.caption = jsonObject["caption"];
        result.description = jsonObject["description"];
        return result;
    };
    return Scenario;
}());
export { Scenario };
var Rect = /** @class */ (function () {
    function Rect() {
    }
    Rect.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Rect;
        result.bottom = jsonObject["bottom"];
        result.top = jsonObject["top"];
        result.left = jsonObject["left"];
        result.right = jsonObject["right"];
        return result;
    };
    return Rect;
}());
export { Rect };
var DocumentReaderGraphicField = /** @class */ (function () {
    function DocumentReaderGraphicField() {
    }
    DocumentReaderGraphicField.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderGraphicField;
        result.sourceType = jsonObject["sourceType"];
        result.fieldType = jsonObject["fieldType"];
        result.lightType = jsonObject["lightType"];
        result.pageIndex = jsonObject["pageIndex"];
        result.fieldName = jsonObject["fieldName"];
        result.lightName = jsonObject["lightName"];
        result.value = jsonObject["value"];
        result.fieldRect = Rect.fromJson(jsonObject["fieldRect"]);
        return result;
    };
    return DocumentReaderGraphicField;
}());
export { DocumentReaderGraphicField };
var DocumentReaderGraphicResult = /** @class */ (function () {
    function DocumentReaderGraphicResult() {
    }
    DocumentReaderGraphicResult.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderGraphicResult;
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (var i in jsonObject["fields"]) {
                result.fields.push(DocumentReaderGraphicField.fromJson(jsonObject["fields"][i]));
            }
        }
        return result;
    };
    return DocumentReaderGraphicResult;
}());
export { DocumentReaderGraphicResult };
var DocumentReaderValue = /** @class */ (function () {
    function DocumentReaderValue() {
    }
    DocumentReaderValue.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderValue;
        result.pageIndex = jsonObject["pageIndex"];
        result.sourceType = jsonObject["sourceType"];
        result.validity = jsonObject["validity"];
        result.probability = jsonObject["probability"];
        result.value = jsonObject["value"];
        result.originalValue = jsonObject["originalValue"];
        result.boundRect = Rect.fromJson(jsonObject["boundRect"]);
        result.comparison = {};
        if (jsonObject["comparison"] != null) {
            for (var i = 0; i < jsonObject["comparison"].length; i++) {
                result.comparison[i] = jsonObject["comparison"][i];
            }
        }
        return result;
    };
    return DocumentReaderValue;
}());
export { DocumentReaderValue };
var DocumentReaderTextField = /** @class */ (function () {
    function DocumentReaderTextField() {
    }
    DocumentReaderTextField.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderTextField;
        result.fieldType = jsonObject["fieldType"];
        result.lcid = jsonObject["lcid"];
        result.status = jsonObject["status"];
        result.lcidName = jsonObject["lcidName"];
        result.fieldName = jsonObject["fieldName"];
        result.value = DocumentReaderValue.fromJson(jsonObject["value"]);
        result.values = [];
        if (jsonObject["values"] != null) {
            for (var i in jsonObject["values"]) {
                result.values.push(DocumentReaderValue.fromJson(jsonObject["values"][i]));
            }
        }
        return result;
    };
    return DocumentReaderTextField;
}());
export { DocumentReaderTextField };
var DocumentReaderTextResult = /** @class */ (function () {
    function DocumentReaderTextResult() {
    }
    DocumentReaderTextResult.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderTextResult;
        result.status = jsonObject["status"];
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (var i in jsonObject["fields"]) {
                result.fields.push(DocumentReaderTextField.fromJson(jsonObject["fields"][i]));
            }
        }
        return result;
    };
    return DocumentReaderTextResult;
}());
export { DocumentReaderTextResult };
var Coordinate = /** @class */ (function () {
    function Coordinate() {
    }
    Coordinate.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Coordinate;
        result.x = jsonObject["x"];
        result.y = jsonObject["y"];
        return result;
    };
    return Coordinate;
}());
export { Coordinate };
var ElementPosition = /** @class */ (function () {
    function ElementPosition() {
    }
    ElementPosition.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new ElementPosition;
        result.docFormat = jsonObject["docFormat"];
        result.width = jsonObject["width"];
        result.height = jsonObject["height"];
        result.dpi = jsonObject["dpi"];
        result.pageIndex = jsonObject["pageIndex"];
        result.inverse = jsonObject["inverse"];
        result.perspectiveTr = jsonObject["perspectiveTr"];
        result.objArea = jsonObject["objArea"];
        result.objIntAngleDev = jsonObject["objIntAngleDev"];
        result.resultStatus = jsonObject["resultStatus"];
        result.angle = jsonObject["angle"];
        result.center = Coordinate.fromJson(jsonObject["center"]);
        result.leftTop = Coordinate.fromJson(jsonObject["leftTop"]);
        result.leftBottom = Coordinate.fromJson(jsonObject["leftBottom"]);
        result.rightTop = Coordinate.fromJson(jsonObject["rightTop"]);
        result.rightBottom = Coordinate.fromJson(jsonObject["rightBottom"]);
        return result;
    };
    return ElementPosition;
}());
export { ElementPosition };
var ImageQuality = /** @class */ (function () {
    function ImageQuality() {
    }
    ImageQuality.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new ImageQuality;
        result.featureType = jsonObject["featureType"];
        result.result = jsonObject["result"];
        result.type = jsonObject["type"];
        return result;
    };
    return ImageQuality;
}());
export { ImageQuality };
var ImageQualityGroup = /** @class */ (function () {
    function ImageQualityGroup() {
    }
    ImageQualityGroup.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new ImageQualityGroup;
        result.count = jsonObject["count"];
        result.result = jsonObject["result"];
        result.imageQualityList = [];
        if (jsonObject["imageQualityList"] != null) {
            for (var i in jsonObject["imageQualityList"]) {
                result.imageQualityList.push(ImageQuality.fromJson(jsonObject["imageQualityList"][i]));
            }
        }
        return result;
    };
    return ImageQualityGroup;
}());
export { ImageQualityGroup };
var DocumentReaderDocumentType = /** @class */ (function () {
    function DocumentReaderDocumentType() {
    }
    DocumentReaderDocumentType.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderDocumentType;
        result.pageIndex = jsonObject["pageIndex"];
        result.documentID = jsonObject["documentID"];
        result.dType = jsonObject["dType"];
        result.dFormat = jsonObject["dFormat"];
        result.dMRZ = jsonObject["dMRZ"];
        result.name = jsonObject["name"];
        result.ICAOCode = jsonObject["ICAOCode"];
        result.dDescription = jsonObject["dDescription"];
        result.dYear = jsonObject["dYear"];
        result.dCountryName = jsonObject["dCountryName"];
        result.FDSID = [];
        if (jsonObject["FDSID"] != null) {
            for (var i in jsonObject["FDSID"]) {
                result.FDSID.push(jsonObject["FDSID"][i]);
            }
        }
        return result;
    };
    return DocumentReaderDocumentType;
}());
export { DocumentReaderDocumentType };
var DocumentReaderNotification = /** @class */ (function () {
    function DocumentReaderNotification() {
    }
    DocumentReaderNotification.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderNotification;
        result.code = jsonObject["code"];
        result.value = jsonObject["value"];
        result.number = jsonObject["number"];
        return result;
    };
    return DocumentReaderNotification;
}());
export { DocumentReaderNotification };
var AccessControlProcedureType = /** @class */ (function () {
    function AccessControlProcedureType() {
    }
    AccessControlProcedureType.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new AccessControlProcedureType;
        result.activeOptionIdx = jsonObject["activeOptionIdx"];
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        return result;
    };
    return AccessControlProcedureType;
}());
export { AccessControlProcedureType };
var FileData = /** @class */ (function () {
    function FileData() {
    }
    FileData.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new FileData;
        result.length = jsonObject["length"];
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.data = jsonObject["data"];
        return result;
    };
    return FileData;
}());
export { FileData };
var CertificateData = /** @class */ (function () {
    function CertificateData() {
    }
    CertificateData.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new CertificateData;
        result.length = jsonObject["length"];
        result.data = jsonObject["data"];
        return result;
    };
    return CertificateData;
}());
export { CertificateData };
var SecurityObjectCertificates = /** @class */ (function () {
    function SecurityObjectCertificates() {
    }
    SecurityObjectCertificates.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new SecurityObjectCertificates;
        result.securityObject = CertificateData.fromJson(jsonObject["securityObject"]);
        return result;
    };
    return SecurityObjectCertificates;
}());
export { SecurityObjectCertificates };
var File = /** @class */ (function () {
    function File() {
    }
    File.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new File;
        result.readingTime = jsonObject["readingTime"];
        result.type = jsonObject["type"];
        result.pAStatus = jsonObject["pAStatus"];
        result.readingStatus = jsonObject["readingStatus"];
        result.fileID = jsonObject["fileID"];
        result.fileData = FileData.fromJson(jsonObject["fileData"]);
        result.certificates = SecurityObjectCertificates.fromJson(jsonObject["certificates"]);
        result.docFieldsText = [];
        if (jsonObject["docFieldsText"] != null) {
            for (var i in jsonObject["docFieldsText"]) {
                result.docFieldsText.push(jsonObject["docFieldsText"][i]);
            }
        }
        result.docFieldsGraphics = [];
        if (jsonObject["docFieldsGraphics"] != null) {
            for (var i in jsonObject["docFieldsGraphics"]) {
                result.docFieldsGraphics.push(jsonObject["docFieldsGraphics"][i]);
            }
        }
        result.docFieldsOriginals = [];
        if (jsonObject["docFieldsOriginals"] != null) {
            for (var i in jsonObject["docFieldsOriginals"]) {
                result.docFieldsOriginals.push(jsonObject["docFieldsOriginals"][i]);
            }
        }
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        return result;
    };
    return File;
}());
export { File };
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Application;
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.applicationID = jsonObject["applicationID"];
        result.dataHashAlgorithm = jsonObject["dataHashAlgorithm"];
        result.unicodeVersion = jsonObject["unicodeVersion"];
        result.version = jsonObject["version"];
        result.files = [];
        if (jsonObject["files"] != null) {
            for (var i in jsonObject["files"]) {
                result.files.push(File.fromJson(jsonObject["files"][i]));
            }
        }
        return result;
    };
    return Application;
}());
export { Application };
var Value = /** @class */ (function () {
    function Value() {
    }
    Value.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Value;
        result.length = jsonObject["length"];
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.data = jsonObject["data"];
        result.format = jsonObject["format"];
        return result;
    };
    return Value;
}());
export { Value };
var Attribute = /** @class */ (function () {
    function Attribute() {
    }
    Attribute.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Attribute;
        result.type = jsonObject["type"];
        result.value = Value.fromJson(jsonObject["value"]);
        return result;
    };
    return Attribute;
}());
export { Attribute };
var Authority = /** @class */ (function () {
    function Authority() {
    }
    Authority.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Authority;
        result.data = jsonObject["data"];
        result.friendlyName = Value.fromJson(jsonObject["friendlyName"]);
        result.attributes = [];
        if (jsonObject["attributes"] != null) {
            for (var i in jsonObject["attributes"]) {
                result.attributes.push(Attribute.fromJson(jsonObject["attributes"][i]));
            }
        }
        return result;
    };
    return Authority;
}());
export { Authority };
var Extension = /** @class */ (function () {
    function Extension() {
    }
    Extension.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Extension;
        result.data = jsonObject["data"];
        result.type = jsonObject["type"];
        return result;
    };
    return Extension;
}());
export { Extension };
var Validity = /** @class */ (function () {
    function Validity() {
    }
    Validity.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Validity;
        result.notAfter = Value.fromJson(jsonObject["notAfter"]);
        result.notBefore = Value.fromJson(jsonObject["notBefore"]);
        return result;
    };
    return Validity;
}());
export { Validity };
var CertificateChain = /** @class */ (function () {
    function CertificateChain() {
    }
    CertificateChain.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new CertificateChain;
        result.origin = jsonObject["origin"];
        result.type = jsonObject["type"];
        result.version = jsonObject["version"];
        result.paStatus = jsonObject["paStatus"];
        result.serialNumber = jsonObject["serialNumber"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.subjectPKAlgorithm = jsonObject["subjectPKAlgorithm"];
        result.fileName = Value.fromJson(jsonObject["fileName"]);
        result.validity = Validity.fromJson(jsonObject["validity"]);
        result.issuer = Authority.fromJson(jsonObject["issuer"]);
        result.subject = Authority.fromJson(jsonObject["subject"]);
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        result.extensions = [];
        if (jsonObject["extensions"] != null) {
            for (var i in jsonObject["extensions"]) {
                result.extensions.push(Extension.fromJson(jsonObject["extensions"][i]));
            }
        }
        return result;
    };
    return CertificateChain;
}());
export { CertificateChain };
var SignerInfo = /** @class */ (function () {
    function SignerInfo() {
    }
    SignerInfo.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new SignerInfo;
        result.version = jsonObject["version"];
        result.paStatus = jsonObject["paStatus"];
        result.dataToHash = jsonObject["dataToHash"];
        result.digestAlgorithm = jsonObject["digestAlgorithm"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.serialNumber = Value.fromJson(jsonObject["serialNumber"]);
        result.signature = Value.fromJson(jsonObject["signature"]);
        result.subjectKeyIdentifier = Value.fromJson(jsonObject["subjectKeyIdentifier"]);
        result.issuer = Authority.fromJson(jsonObject["issuer"]);
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        result.signedAttributes = [];
        if (jsonObject["signedAttributes"] != null) {
            for (var i in jsonObject["signedAttributes"]) {
                result.signedAttributes.push(Extension.fromJson(jsonObject["signedAttributes"][i]));
            }
        }
        result.certificateChain = [];
        if (jsonObject["certificateChain"] != null) {
            for (var i in jsonObject["certificateChain"]) {
                result.certificateChain.push(CertificateChain.fromJson(jsonObject["certificateChain"][i]));
            }
        }
        return result;
    };
    return SignerInfo;
}());
export { SignerInfo };
var SecurityObject = /** @class */ (function () {
    function SecurityObject() {
    }
    SecurityObject.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new SecurityObject;
        result.fileReference = jsonObject["fileReference"];
        result.version = jsonObject["version"];
        result.objectType = jsonObject["objectType"];
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        result.signerInfos = [];
        if (jsonObject["signerInfos"] != null) {
            for (var i in jsonObject["signerInfos"]) {
                result.signerInfos.push(SignerInfo.fromJson(jsonObject["signerInfos"][i]));
            }
        }
        return result;
    };
    return SecurityObject;
}());
export { SecurityObject };
var CardProperties = /** @class */ (function () {
    function CardProperties() {
    }
    CardProperties.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new CardProperties;
        result.aTQA = jsonObject["aTQA"];
        result.bitRateR = jsonObject["bitRateR"];
        result.bitRateS = jsonObject["bitRateS"];
        result.chipTypeA = jsonObject["chipTypeA"];
        result.mifareMemory = jsonObject["mifareMemory"];
        result.rfidType = jsonObject["rfidType"];
        result.sAK = jsonObject["sAK"];
        result.support4 = jsonObject["support4"];
        result.supportMifare = jsonObject["supportMifare"];
        result.aTQB = jsonObject["aTQB"];
        result.aTR = jsonObject["aTR"];
        result.baudrate1 = jsonObject["baudrate1"];
        result.baudrate2 = jsonObject["baudrate2"];
        result.uID = jsonObject["uID"];
        return result;
    };
    return CardProperties;
}());
export { CardProperties };
var RFIDSessionData = /** @class */ (function () {
    function RFIDSessionData() {
    }
    RFIDSessionData.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new RFIDSessionData;
        result.totalBytesReceived = jsonObject["totalBytesReceived"];
        result.totalBytesSent = jsonObject["totalBytesSent"];
        result.status = jsonObject["status"];
        result.extLeSupport = jsonObject["extLeSupport"];
        result.processTime = jsonObject["processTime"];
        result.cardProperties = CardProperties.fromJson(jsonObject["cardProperties"]);
        result.sessionDataStatus = RFIDSessionDataStatus.fromJson(jsonObject["sessionDataStatus"]);
        result.accessControls = [];
        if (jsonObject["accessControls"] != null) {
            for (var i in jsonObject["accessControls"]) {
                result.accessControls.push(AccessControlProcedureType.fromJson(jsonObject["accessControls"][i]));
            }
        }
        result.applications = [];
        if (jsonObject["applications"] != null) {
            for (var i in jsonObject["applications"]) {
                result.applications.push(Application.fromJson(jsonObject["applications"][i]));
            }
        }
        result.securityObjects = [];
        if (jsonObject["securityObjects"] != null) {
            for (var i in jsonObject["securityObjects"]) {
                result.securityObjects.push(SecurityObject.fromJson(jsonObject["securityObjects"][i]));
            }
        }
        return result;
    };
    return RFIDSessionData;
}());
export { RFIDSessionData };
var DocumentReaderAuthenticityCheck = /** @class */ (function () {
    function DocumentReaderAuthenticityCheck() {
    }
    DocumentReaderAuthenticityCheck.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderAuthenticityCheck;
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.typeName = jsonObject["typeName"];
        result.pageIndex = jsonObject["pageIndex"];
        result.elements = [];
        if (jsonObject["elements"] != null) {
            for (var i in jsonObject["elements"]) {
                result.elements.push(DocumentReaderAuthenticityElement.fromJson(jsonObject["elements"][i]));
            }
        }
        return result;
    };
    return DocumentReaderAuthenticityCheck;
}());
export { DocumentReaderAuthenticityCheck };
var PDF417Info = /** @class */ (function () {
    function PDF417Info() {
    }
    PDF417Info.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new PDF417Info;
        result.errorLevel = jsonObject["errorLevel"];
        result.columns = jsonObject["columns"];
        result.rows = jsonObject["rows"];
        return result;
    };
    return PDF417Info;
}());
export { PDF417Info };
var RFIDSessionDataStatus = /** @class */ (function () {
    function RFIDSessionDataStatus() {
    }
    RFIDSessionDataStatus.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new RFIDSessionDataStatus;
        result.AA = jsonObject["AA"];
        result.BAC = jsonObject["BAC"];
        result.CA = jsonObject["CA"];
        result.PA = jsonObject["PA"];
        result.PACE = jsonObject["PACE"];
        result.TA = jsonObject["TA"];
        result.overallStatus = jsonObject["overallStatus"];
        return result;
    };
    return RFIDSessionDataStatus;
}());
export { RFIDSessionDataStatus };
var DocumentReaderBarcodeResult = /** @class */ (function () {
    function DocumentReaderBarcodeResult() {
    }
    DocumentReaderBarcodeResult.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderBarcodeResult;
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (var i in jsonObject["fields"]) {
                result.fields.push(DocumentReaderBarcodeField.fromJson(jsonObject["fields"][i]));
            }
        }
        return result;
    };
    return DocumentReaderBarcodeResult;
}());
export { DocumentReaderBarcodeResult };
var DocumentReaderBarcodeField = /** @class */ (function () {
    function DocumentReaderBarcodeField() {
    }
    DocumentReaderBarcodeField.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderBarcodeField;
        result.barcodeType = jsonObject["barcodeType"];
        result.status = jsonObject["status"];
        result.pageIndex = jsonObject["pageIndex"];
        result.pdf417Info = PDF417Info.fromJson(jsonObject["pdf417Info"]);
        result.data = [];
        if (jsonObject["data"] != null) {
            for (var i in jsonObject["data"]) {
                result.data.push(jsonObject["data"][i]);
            }
        }
        return result;
    };
    return DocumentReaderBarcodeField;
}());
export { DocumentReaderBarcodeField };
var DocumentReaderAuthenticityResult = /** @class */ (function () {
    function DocumentReaderAuthenticityResult() {
    }
    DocumentReaderAuthenticityResult.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderAuthenticityResult;
        result.status = jsonObject["status"];
        result.checks = [];
        if (jsonObject["checks"] != null) {
            for (var i in jsonObject["checks"]) {
                result.checks.push(DocumentReaderAuthenticityCheck.fromJson(jsonObject["checks"][i]));
            }
        }
        return result;
    };
    return DocumentReaderAuthenticityResult;
}());
export { DocumentReaderAuthenticityResult };
var DocumentReaderAuthenticityElement = /** @class */ (function () {
    function DocumentReaderAuthenticityElement() {
    }
    DocumentReaderAuthenticityElement.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderAuthenticityElement;
        result.status = jsonObject["status"];
        result.elementType = jsonObject["elementType"];
        result.elementDiagnose = jsonObject["elementDiagnose"];
        result.elementTypeName = jsonObject["elementTypeName"];
        result.elementDiagnoseName = jsonObject["elementDiagnoseName"];
        return result;
    };
    return DocumentReaderAuthenticityElement;
}());
export { DocumentReaderAuthenticityElement };
var DocumentReaderCompletion = /** @class */ (function () {
    function DocumentReaderCompletion() {
    }
    DocumentReaderCompletion.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderCompletion;
        result.action = jsonObject["action"];
        result.results = DocumentReaderResults.fromJson(jsonObject["results"]);
        result.error = Throwable.fromJson(jsonObject["error"]);
        return result;
    };
    return DocumentReaderCompletion;
}());
export { DocumentReaderCompletion };
var Throwable = /** @class */ (function () {
    function Throwable() {
    }
    Throwable.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Throwable;
        result.code = jsonObject["code"];
        result.domain = jsonObject["domain"];
        result.localizedMessage = jsonObject["localizedMessage"];
        result.message = jsonObject["message"];
        result.string = jsonObject["string"];
        result.stackTrace = [];
        if (jsonObject["stackTrace"] != null) {
            for (var i in jsonObject["stackTrace"]) {
                result.stackTrace.push(StackTraceElement.fromJson(jsonObject["stackTrace"][i]));
            }
        }
        return result;
    };
    return Throwable;
}());
export { Throwable };
var StackTraceElement = /** @class */ (function () {
    function StackTraceElement() {
    }
    StackTraceElement.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new StackTraceElement;
        result.lineNumber = jsonObject["lineNumber"];
        result.isNativeMethod = jsonObject["isNativeMethod"];
        result.className = jsonObject["className"];
        result.fileName = jsonObject["fileName"];
        result.methodName = jsonObject["methodName"];
        result.string = jsonObject["string"];
        return result;
    };
    return StackTraceElement;
}());
export { StackTraceElement };
var DocumentReaderResults = /** @class */ (function () {
    function DocumentReaderResults() {
    }
    DocumentReaderResults.prototype.getTextFieldValueByType = function (_a) {
        var fieldType = _a.fieldType, _b = _a.lcid, lcid = _b === void 0 ? 0 : _b, _c = _a.source, source = _c === void 0 ? -1 : _c, _d = _a.original, original = _d === void 0 ? false : _d;
        if (this.textResult == null) {
            return null;
        }
        var field = this.findByTypeAndLcid(fieldType, lcid);
        if (field == null) {
            return null;
        }
        var value = this.findBySource(field, source);
        if (value == null) {
            return null;
        }
        return original ? value.originalValue : value.value;
    };
    DocumentReaderResults.prototype.getTextFieldStatusByType = function (fieldType, lcid) {
        if (this.textResult == null) {
            return 0;
        }
        var field = this.findByTypeAndLcid(fieldType, lcid);
        return field != null ? field.status : 0;
    };
    DocumentReaderResults.prototype.getGraphicFieldImageByType = function (_a) {
        var fieldType = _a.fieldType, _b = _a.source, source = _b === void 0 ? -1 : _b, _c = _a.light, light = _c === void 0 ? -1 : _c, _d = _a.pageIndex, pageIndex = _d === void 0 ? -1 : _d;
        if (this.graphicResult == null) {
            return null;
        }
        var foundFields = [];
        for (var _i = 0, _e = this.graphicResult.fields; _i < _e.length; _i++) {
            var field = _e[_i];
            if (field.fieldType === fieldType) {
                foundFields.push(field);
            }
        }
        if (source !== -1) {
            for (var i = 0; i < foundFields.length; i++) {
                if (foundFields[i].sourceType !== source) {
                    foundFields.splice(i, 1);
                }
            }
        }
        if (light !== -1) {
            for (var i = 0; i < foundFields.length; i++) {
                if (foundFields[i].lightType !== light) {
                    foundFields.splice(i, 1);
                }
            }
        }
        if (pageIndex !== -1) {
            for (var i = 0; i < foundFields.length; i++) {
                if (foundFields[i].pageIndex !== pageIndex) {
                    foundFields.splice(i, 1);
                }
            }
        }
        return foundFields.length > 0 ? foundFields[0].value : null;
    };
    DocumentReaderResults.prototype.getQualityResult = function (_a) {
        var imageQualityCheckType = _a.imageQualityCheckType, _b = _a.securityFeature, securityFeature = _b === void 0 ? -1 : _b;
        var resultSum = 2;
        if (this.imageQuality == null) {
            return resultSum;
        }
        for (var _i = 0, _c = this.imageQuality.imageQualityList; _i < _c.length; _i++) {
            var field = _c[_i];
            if (field.type === imageQualityCheckType) {
                if (securityFeature === -1) {
                    if (field.result === 0) {
                        resultSum = 0;
                        break;
                    }
                    if (field.result === 1) {
                        resultSum = field.result;
                    }
                }
                else if (field.featureType === securityFeature) {
                    resultSum = field.result;
                    break;
                }
            }
        }
        return resultSum;
    };
    DocumentReaderResults.prototype.findByTypeAndLcid = function (type, lcid) {
        var field;
        var foundFields = [];
        for (var _i = 0, _a = this.textResult.fields; _i < _a.length; _i++) {
            field = _a[_i];
            if (field.fieldType === type) {
                foundFields.push(field);
            }
        }
        if (foundFields.length <= 0) {
            return null;
        }
        var foundField = null;
        for (var _b = 0, foundFields_1 = foundFields; _b < foundFields_1.length; _b++) {
            field = foundFields_1[_b];
            if (lcid === 0) {
                foundField = field;
                if (field.lcid === lcid) {
                    break;
                }
            }
            else if (field.lcid === lcid) {
                return field;
            }
        }
        return foundField;
    };
    DocumentReaderResults.prototype.findBySource = function (field, sourceType) {
        var value;
        if (sourceType === -1) {
            var mrzVal = this.findBySource(field, 3);
            if (mrzVal != null) {
                return mrzVal;
            }
            value = this.findBySource(field, 18);
            if (value != null) {
                return value;
            }
            var visualVal = this.findBySource(field, 17);
            return visualVal != null ? visualVal : null;
        }
        for (var _i = 0, _a = field.values; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.sourceType === sourceType) {
                return item;
            }
        }
        return null;
    };
    DocumentReaderResults.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderResults;
        result.chipPage = jsonObject["chipPage"];
        result.overallResult = jsonObject["overallResult"];
        result.processingFinishedStatus = jsonObject["processingFinishedStatus"];
        result.elapsedTime = jsonObject["elapsedTime"];
        result.elapsedTimeRFID = jsonObject["elapsedTimeRFID"];
        result.morePagesAvailable = jsonObject["morePagesAvailable"];
        result.rfidResult = jsonObject["rfidResult"];
        result.highResolution = jsonObject["highResolution"];
        result.graphicResult = DocumentReaderGraphicResult.fromJson(jsonObject["graphicResult"]);
        result.textResult = DocumentReaderTextResult.fromJson(jsonObject["textResult"]);
        result.documentPosition = ElementPosition.fromJson(jsonObject["documentPosition"]);
        result.barcodePosition = ElementPosition.fromJson(jsonObject["barcodePosition"]);
        result.mrzPosition = ElementPosition.fromJson(jsonObject["mrzPosition"]);
        result.imageQuality = ImageQualityGroup.fromJson(jsonObject["imageQuality"]);
        result.rawResult = jsonObject["rawResult"];
        result.documentReaderNotification = DocumentReaderNotification.fromJson(jsonObject["documentReaderNotification"]);
        result.rfidSessionData = RFIDSessionData.fromJson(jsonObject["rfidSessionData"]);
        result.authenticityResult = DocumentReaderAuthenticityResult.fromJson(jsonObject["authenticityResult"]);
        result.barcodeResult = DocumentReaderBarcodeResult.fromJson(jsonObject["barcodeResult"]);
        result.documentType = [];
        if (jsonObject["documentType"] != null) {
            for (var i in jsonObject["documentType"]) {
                result.documentType.push(DocumentReaderDocumentType.fromJson(jsonObject["documentType"][i]));
            }
        }
        return result;
    };
    return DocumentReaderResults;
}());
export { DocumentReaderResults };
// Enum
export var BarcodeResult = {
    NO_ERR: 0,
    NULL_PTR_ERR: -6001,
    BAD_ARG_ERR: -6002,
    SIZE_ERR: -6003,
    RANGE_ERR: -6004,
    INTERNAL_ERR: -6005,
    TRY_EXCEPT_ERR: -6006,
    BAR_CODE_NOT_FOUND: -6008,
    BAR_CODE_DECODE_ERR: -6010,
    NO_USER_DLL_FOUND: -6019,
    NO_IPP_DLL_FOUND: -6020,
    IPP_EXEC_ERR: -6024,
    IPP_TRY_EXCEPT_ERR: -6025,
    BARCODE_ERROR_INPUT_PARAM: -11001,
    BARCODE_ERROR_FINIT: -11006,
    BARCODE_ERROR_NOT_LOAD_IP_DECODED_LL: -11012,
    BARCODE_ERROR_INNER_PROBLEM: -11100,
    BARCODE_ERROR_DECODE_1D_BAD_DECODE: -11200,
    BARCODE_ERROR_FIND_ROW_OR_COLUMN: -11201,
    BARCODE_ERROR_FIND_3X8_2D_X: -11202,
    BARCODE_ERROR_FIND_3X8_2D_Y: -11203,
    BARCODE_ERROR_2D_UGOL_MAX: -11204,
    BARCODE_ERROR_INDEFINITELY_DECODED: -11210,
    BARCODE_ERROR_DLL_NOT_INIT: -11300,
    BARCODE_ERROR_IP_DECODE_DLL_Try_Except: -11400,
    IPDECODE_ERROR_LARGEERRORS: -4503,
    IPDECODE_ERROR_FAULTCOLUMNS: -4504,
    IPDECODE_ERROR_FAULTROWS: -4505,
    IPDECODE_ERROR_INCORRECT_ERROR_LEVEL: -4511,
    IPDECODE_ERROR_LOADING_DEV_TABLE: -4512,
};
export var BarcodeType = {
    UNKNOWN: 0,
    BCT_CODE128: 1,
    CODE39: 2,
    EAN8: 3,
    ITF: 4,
    PDF417: 5,
    STF: 6,
    MTF: 7,
    IATA: 8,
    CODABAR: 9,
    UPCA: 10,
    CODE93: 11,
    UPCE: 12,
    EAN13: 13,
    QRCODE: 14,
    AZTEC: 15,
    DATAMATRIX: 16,
    ALL_1D: 17,
    CODE11: 18,
};
export var CameraMode = {
    AUTO: 0,
    CAMERA1: 1,
    CAMERA2: 2,
};
export var CameraTypes = {
    FRONT: "front",
    BACK: "back",
};
export var CaptureMode = {
    AUTO: 0,
    CAPTURE_VIDEO: 1,
    CAPTURE_FRAME: 2,
};
export var diDocType = {
    dtNotDefined: 0,
    dtPassport: 11,
    dtIdentityCard: 12,
    dtDiplomaticPassport: 13,
    dtServicePassport: 14,
    dtSeamansIdentityDocument: 15,
    dtIdentityCardforResidence: 16,
    dtTraveldocument: 17,
    dtOther: 99,
    dtVisaID2: 29,
    dtVisaID3: 30,
    dtRegistrationCertificate: 31,
    dtNationalIdentityCard: 20,
    dtSocialIdentityCard: 21,
    dtAliensIdentityCard: 22,
    dtPrivilegedIdentityCard: 23,
    dtResidencePermitIdentityCard: 24,
    dtOriginCard: 25,
    dtEmergencyPassport: 26,
    dtAliensPassport: 27,
    dtAlternativeIdentityCard: 28,
    dtAuthorizationCard: 32,
    dtBeginnerPermit: 33,
    dtBorderCrossingCard: 34,
    dtChauffeurLicense: 35,
    dtChauffeurLicenseUnder18: 36,
    dtChauffeurLicenseUnder21: 37,
    dtCommercialDrivingLicense: 38,
    dtCommercialDrivingLicenseIndtuctionalPermit: 39,
    dtCommercialDrivingLicenseUnder18: 40,
    dtCommercialDrivingLicenseUnder21: 41,
    dtCommercialIndtuctionPermit: 42,
    dtCommercialNewPermit: 43,
    dtConcealedCarryLicense: 44,
    dtConcealedFirearmPermit: 45,
    dtConditionalDrivingLicense: 46,
    dtDepartmentOfVeteransAffairsIdentityCard: 47,
    dtDiplomaticDrivingLicense: 48,
    dtDrivingLicense: 49,
    dtDrivingLicenseIndtuctionalPermit: 50,
    dtDrivingLicenseIndtuctionalPermitUnder18: 51,
    dtDrivingLicenseIndtuctionalPermitUnder21: 52,
    dtDrivingLicenseLearnersPermit: 53,
    dtDrivingLicenseLearnersPermitUnder18: 54,
    dtDrivingLicenseLearnersPermitUnder21: 55,
    dtDrivingLicenseNovice: 56,
    dtDrivingLicenseNoviceUnder18: 57,
    dtDrivingLicenseNoviceUnder21: 58,
    dtDrivingLicenseRegisteredOffender: 59,
    dtDrivingLicenseRedtictedUnder18: 60,
    dtDrivingLicenseRedtictedUnder21: 61,
    dtDrivingLicenseTemporaryVisitor: 62,
    dtDrivingLicenseTemporaryVisitorUnder18: 63,
    dtDrivingLicenseTemporaryVisitorUnder21: 64,
    dtDrivingLicenseUnder18: 65,
    dtDrivingLicenseUnder21: 66,
    dtEmploymentDrivingPermit: 67,
    dtEnhancedChauffeurLicense: 68,
    dtEnhancedChauffeurLicenseUnder18: 69,
    dtEnhancedChauffeurLicenseUnder21: 70,
    dtEnhancedCommercialDrivingLicense: 71,
    dtEnhancedDrivingLicense: 72,
    dtEnhancedDrivingLicenseUnder18: 73,
    dtEnhancedDrivingLicenseUnder21: 74,
    dtEnhancedIdentityCard: 75,
    dtEnhancedIdentityCardUnder18: 76,
    dtEnhancedIdentityCardUnder21: 77,
    dtEnhancedOperatorsLicense: 78,
    dtFirearmsPermit: 79,
    dtFullProvisionalLicense: 80,
    dtFullProvisionalLicenseUnder18: 81,
    dtFullProvisionalLicenseUnder21: 82,
    dtGenevaConventionsIdentityCard: 83,
    dtGraduatedDrivingLicenseUnder18: 84,
    dtGraduatedDrivingLicenseUnder21: 85,
    dtGraduatedIndtuctionPermitUnder18: 86,
    dtGraduatedIndtuctionPermitUnder21: 87,
    dtGraduatedLicenseUnder18: 88,
    dtGraduatedLicenseUnder21: 89,
    dtHandgunCarryPermit: 90,
    dtIdentityAndPrivilegeCard: 91,
    dtIdentityCardMobilityImpaired: 92,
    dtIdentityCardRegisteredOffender: 93,
    dtIdentityCardTemporaryVisitor: 94,
    dtIdentityCardTemporaryVisitorUnder18: 95,
    dtIdentityCardTemporaryVisitorUnder21: 96,
    dtIdentityCardUnder18: 97,
    dtIdentityCardUnder21: 98,
    dtIgnitionInterlockPermit: 100,
    dtImmigrantVisa: 101,
    dtIndtuctionPermit: 102,
    dtIndtuctionPermitUnder18: 103,
    dtIndtuctionPermitUnder21: 104,
    dtInterimDrivingLicense: 105,
    dtInterimIdentityCard: 106,
    dtIntermediateDrivingLicense: 107,
    dtIntermediateDrivingLicenseUnder18: 108,
    dtIntermediateDrivingLicenseUnder21: 109,
    dtJuniorDrivingLicense: 110,
    dtLearnerIndtuctionalPermit: 111,
    dtLearnerLicense: 112,
    dtLearnerLicenseUnder18: 113,
    dtLearnerLicenseUnder21: 114,
    dtLearnerPermit: 115,
    dtLearnerPermitUnder18: 116,
    dtLearnerPermitUnder21: 117,
    dtLimitedLicense: 118,
    dtLimitedPermit: 119,
    dtLimitedTermDrivingLicense: 120,
    dtLimitedTermIdentityCard: 121,
    dtLiquorIdentityCard: 122,
    dtNewPermit: 123,
    dtNewPermitUnder18: 124,
    dtNewPermitUnder21: 125,
    dtNonUsCitizenDrivingLicense: 126,
    dtOccupationalDrivingLicense: 127,
    dtOneidaTribeOfIndiansIdentityCard: 128,
    dtOperatorLicense: 129,
    dtOperatorLicenseUnder18: 130,
    dtOperatorLicenseUnder21: 131,
    dtPermanentDrivingLicense: 132,
    dtPermitToReEnter: 133,
    dtProbationaryAutoLicense: 134,
    dtProbationaryDrivingLicenseUnder18: 135,
    dtProbationaryDrivingLicenseUnder21: 136,
    dtProbationaryVehicleSalespersonLicense: 137,
    dtProvisionalDrivingLicense: 138,
    dtProvisionalDrivingLicenseUnder18: 139,
    dtProvisionalDrivingLicenseUnder21: 140,
    dtProvisionalLicense: 141,
    dtProvisionalLicenseUnder18: 142,
    dtProvisionalLicenseUnder21: 143,
    dtPublicPassengerChauffeurLicense: 144,
    dtRacingAndGamingComissionCard: 145,
    dtRefugeeTravelDocument: 146,
    dtRenewalPermit: 147,
    dtRedtictedCommercialDrivingLicense: 148,
    dtRedtictedDrivingLicense: 149,
    dtRedtictedPermit: 150,
    dtSeasonalPermit: 151,
    dtSeasonalResidentIdentityCard: 152,
    dtSeniorCitizenIdentityCard: 153,
    dtSexOffender: 154,
    dtSocialSecurityCard: 155,
    dtTemporaryDrivingLicense: 156,
    dtTemporaryDrivingLicenseUnder18: 157,
    dtTemporaryDrivingLicenseUnder21: 158,
    dtTemporaryIdentityCard: 159,
    dtTemporaryIndtuctionPermitIdentityCard: 160,
    dtTemporaryIndtuctionPermitIdentityCardUnder18: 161,
    dtTemporaryIndtuctionPermitIdentityCardUnder21: 162,
    dtTemporaryVisitorDrivingLicense: 163,
    dtTemporaryVisitorDrivingLicenseUnder18: 164,
    dtTemporaryVisitorDrivingLicenseUnder21: 165,
    dtUniformedServicesIdentityCard: 166,
    dtVehicleSalespersonLicense: 167,
    dtWorkerIdentificationCredential: 168,
    dtCommercialDrivingLicenseNovice: 169,
    dtCommercialDrivingLicenseNoviceUnder18: 170,
    dtCommercialDrivingLicenseNoviceUnder21: 171,
    dtPassportCard: 172,
    dtPermanentResidentCard: 173,
    dtPersonalIdentificationVerification: 174,
    dtTemporaryOperatorLicense: 175,
    dtDrivingLicenseUnder19: 176,
    dtIdentityCardUnder19: 177,
    dtVisa: 178,
    dtTemporaryPassport: 179,
    dtVotingCard: 180,
    dtHealthCard: 181,
    dtCertificateOfCitizenship: 182,
    dtAddressCard: 183,
    dtAirportImmigrationCard: 184,
    dtAlienRegidtationCard: 185,
    dtAPEHCard: 186,
    dtCoupontoDrivingLicense: 187,
    dtCrewMemberCertificate: 188,
    dtDocumentForReturn: 189,
    dtECard: 190,
    dtEmploymentCard: 191,
    dtHKSARImmigrationForm: 192,
    dtImmigrantcard: 193,
    dtLabourCard: 194,
    dtLaissezPasser: 195,
    dtLawyerIdentityCertificate: 196,
    dtLicenseCard: 197,
    dtPassportStateless: 198,
    dtPassportChild: 199,
    dtPassportConsular: 200,
    dtPassportDiplomaticService: 201,
    dtPassportOfficial: 202,
    dtPassportProvisional: 203,
    dtPassportSpecial: 204,
    dtPermissiontotheLocalBorderTraffic: 205,
    dtSEDESOLCard: 207,
    dtSocialCard: 208,
    dtTBCard: 209,
    dtVehiclePassport: 210,
    dtWDocument: 211,
    dtDiplomaticIdentityCard: 212,
    dtConsularIdentityCard: 213,
    dtIncomeTaxCard: 214,
    dtResidencePermit: 215,
    dtDocumentOfIdentity: 216,
    dtBorderCrossingPermit: 217,
    dtPassportLimitedValidity: 218,
    dtSIMCard: 219,
    dtTaxCard: 220,
    dtCompanyCard: 221,
    dtDomesticPassport: 222,
    dtIdentityCertificate: 223,
    dtResidentIdCard: 224,
    dtArmedForcesIdentityCard: 225,
    dtProfessionalCard: 226,
    dtRegistrationStamp: 227,
    dtDriverCard: 228,
    dtDriverTrainingCertificate: 229,
    dtQualificationDrivingLicense: 230,
    dtMembershipCard: 231,
    dtPublicVehicleDriverAuthorityCard: 232,
    dtMarineLicense: 233,
    dtTemporaryLearnerDrivingLicense: 234,
    dtTemporaryCommercialDrivingLicense: 235,
    dtInterimInstructionalPermit: 236,
    dtCertificateOfCompetency: 237,
    dtCertificateOfProficiency: 238,
};
export var DocFormat = {
    ID1: 0,
    ID2: 1,
    ID3: 2,
    ID3_x2: 5,
    CUSTOM: 1000,
    FLEXIBLE: 1002,
};
export var DocReaderAction = {
    COMPLETE: 1,
    PROCESS: 0,
    CANCEL: 2,
    ERROR: 3,
    NOTIFICATION: 5,
    PROCESS_WHITE_UV_IMAGES: 6,
    MORE_PAGES_AVAILABLE: 8,
};
export var DocReaderFrame = {
    MAX: "max",
    SCENARIO_DEFAULT: "id1",
    NONE: "none",
    DOCUMENT: "document",
};
export var DocReaderOrientation = {
    ROTATE: 0,
    PORTRAIT: 1,
    LANDSCAPE: 2,
};
export var eCheckDiagnose = {
    UNKNOWN: 0,
    PASS: 1,
    INVALID_INPUT_DATA: 2,
    INTERNAL_ERROR: 3,
    EXCEPTION_IN_MODULE: 4,
    UNCERTAIN_VERIFICATION: 5,
    NECESSARY_IMAGE_NOT_FOUND: 7,
    PHOTO_SIDES_NOT_FOUND: 8,
    INVALID_CHECKSUM: 10,
    SYNTAX_ERROR: 11,
    LOGIC_ERROR: 12,
    SOURCES_COMPARISON_ERROR: 13,
    FIELDS_COMPARISON_LOGIC_ERROR: 14,
    INVALID_FIELD_FORMAT: 15,
    TRUE_LUMINISCENCE_ERROR: 20,
    FALSE_LUMINISCENCE_ERROR: 21,
    FIXED_PATTERN_ERROR: 22,
    LOW_CONTRAST_IN_IR_LIGHT: 23,
    INCORRECT_BACKGROUND_LIGHT: 24,
    BACKGROUND_COMPARISON_ERROR: 25,
    INCORRECT_TEXT_COLOR: 26,
    PHOTO_FALSE_LUMINISCENCE: 27,
    TOO_MUCH_SHIFT: 28,
    FIBERS_NOT_FOUND: 30,
    TOO_MANY_OBJECTS: 31,
    SPECKS_IN_UV: 33,
    TOO_LOW_RESOLUTION: 34,
    INVISIBLE_ELEMENT_PRESENT: 40,
    VISIBLE_ELEMENT_ABSENT: 41,
    ELEMENT_SHOULD_BE_COLORED: 42,
    ELEMENT_SHOULD_BE_GRAYSCALE: 43,
    UV_DULL_PAPER_MRZ: 50,
    FALSE_LUMINISCENCE_IN_MRZ: 51,
    UV_DULL_PAPER_PHOTO: 52,
    UV_DULL_PAPER_BLANK: 53,
    UV_DULL_PAPER_ERROR: 54,
    FALSE_LUMINISCENCE_IN_BLANK: 55,
    BAD_AREA_IN_AXIAL: 60,
    FALSE_IPI_PARAMETERS: 65,
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR: 80,
    OVI_IR_INVISIBLE: 90,
    OVI_INSUFFICIENT_AREA: 91,
    OVI_COLOR_INVARIABLE: 92,
    OVI_BAD_COLOR_FRONT: 93,
    OVI_BAD_COLOR_SIDE: 94,
    OVI_WIDE_COLOR_SPREAD: 95,
    OVI_BAD_COLOR_PERCENT: 96,
    HOLOGRAM_ELEMENT_ABSENT: 100,
    HOLOGRAM_SIDE_TOP_IMAGES_ABSENT: 101,
    HOLOGRAM_ELEMENT_PRESENT: 102,
    PHOTO_PATTERN_INTERRUPTED: 110,
    PHOTO_PATTERN_SHIFTED: 111,
    PHOTO_PATTERN_DIFFERENT_COLORS: 112,
    PHOTO_PATTERN_IR_VISIBLE: 113,
    PHOTO_PATTERN_NOT_INTERSECT: 114,
    PHOTO_SIZE_IS_WRONG: 115,
    PHOTO_PATTERN_INVALID_COLOR: 116,
    PHOTO_PATTERN_SHIFTED_VERT: 117,
    PHOTO_PATTERN_PATTERN_NOT_FOUND: 118,
    PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS: 119,
    PHOTO_IS_NOT_RECTANGLE: 120,
    PHOTO_CORNERS_IS_WRONG: 121,
    DOCUMENT_IS_CANCELLING: 122,
    TEXT_COLOR_SHOULD_BE_BLUE: 130,
    TEXT_COLOR_SHOULD_BE_GREEN: 131,
    TEXT_COLOR_SHOULD_BE_RED: 132,
    TEXT_SHOULD_BE_BLACK: 133,
    BARCODE_WAS_READ_WITH_ERRORS: 140,
    BARCODE_DATA_FORMAT_ERROR: 141,
    BARCODE_SIZE_PARAMS_ERROR: 142,
    NOT_ALL_BARCODES_READ: 143,
    PORTRAIT_COMPARISON_PORTRAITS_DIFFER: 150,
    PORTRAIT_COMPARISON_NO_SERVICE_REPLY: 151,
    PORTRAIT_COMPARISON_SERVICE_ERROR: 152,
    PPORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES: 153,
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO: 154,
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE: 155,
    PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED: 156,
    MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS: 160,
    MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE: 161,
    LAST_DIAGNOSE_VALUE: 162,
};
export var eCheckResult = {
    CH_CHECK_ERROR: 0,
    CH_CHECK_OK: 1,
    CH_CHECK_WAS_NOT_DONE: 2,
};
export var eGraphicFieldType = {
    GF_PORTRAIT: 201,
    GF_FINGERPR: 202,
    GF_EYE: 203,
    GF_SIGNATURE: 204,
    GF_BAR_CODE: 205,
    GF_PROOF_OF_CITIZENSHIP: 206,
    GF_DOCUMENT_IMAGE: 207,
    GF_COLOR_DYNAMIC: 209,
    GF_GHOST_PORTRAIT: 210,
    GF_STAMP: 211,
    GF_PORTRAIT_OF_CHILD: 212,
    GF_OTHER: 250,
    GF_FINGER_LEFT_THUMB: 300,
    GF_FINGER_LEFT_INDEX: 301,
    GF_FINGER_LEFT_MIDDLE: 302,
    GF_FINGER_LEFT_RING: 303,
    GF_FINGER_LEFT_LITTLE: 304,
    GF_FINGER_RIGHT_THUMB: 305,
    GF_FINGER_RIGHT_INDEX: 306,
    GF_FINGER_RIGHT_MIDDLE: 307,
    GF_FINGER_RIGHT_RING: 308,
    GF_FINGER_RIGHT_LITTLE: 309,
    getTranslation: function (value) {
        switch (value) {
            case this.GF_PORTRAIT:
                return "Portrait";
            case this.GF_FINGERPR:
                return "Fingerprint";
            case this.GF_EYE:
                return "Iris";
            case this.GF_SIGNATURE:
                return "Signature";
            case this.GF_BAR_CODE:
                return "Barcode";
            case this.GF_PROOF_OF_CITIZENSHIP:
                return "Proof of citizenship";
            case this.GF_DOCUMENT_IMAGE:
                return "Document image";
            case this.GF_COLOR_DYNAMIC:
                return "Color dynamics";
            case this.GF_GHOST_PORTRAIT:
                return "Ghost portrait";
            case this.GF_STAMP:
                return "Stamp";
            case this.GF_PORTRAIT_OF_CHILD:
                return "Portrait of child";
            case this.GF_OTHER:
                return "Other";
            case this.GF_FINGER_LEFT_THUMB:
                return "Left thumb";
            case this.GF_FINGER_LEFT_INDEX:
                return "Left index finger";
            case this.GF_FINGER_LEFT_MIDDLE:
                return "Left middle finger";
            case this.GF_FINGER_LEFT_RING:
                return "Left ring finger";
            case this.GF_FINGER_LEFT_LITTLE:
                return "Left little finger";
            case this.GF_FINGER_RIGHT_THUMB:
                return "Right thumb";
            case this.GF_FINGER_RIGHT_INDEX:
                return "Right index finger";
            case this.GF_FINGER_RIGHT_MIDDLE:
                return "Right middle finger";
            case this.GF_FINGER_RIGHT_RING:
                return "Right ring finger";
            case this.GF_FINGER_RIGHT_LITTLE:
                return "Right little finger";
            default:
                return value.toString();
        }
    }
};
export var eImageQualityCheckType = {
    IQC_IMAGE_GLARES: 0,
    IQC_IMAGE_FOCUS: 1,
    IQC_IMAGE_RESOLUTION: 2,
};
export var eProcessGLCommands = {
    ePC_ProcMgr_SetLicense: 12100,
    ePC_ProcMgr_Process: 12101,
    ePC_ProcMgr_ProcessAsync: 12102,
    ePC_ProcMgr_Init: 12103,
    ePC_ProcMgr_ProcessImage: 12104,
    ePC_ProcMgr_StartNewDocument: 12105,
    ePC_ProcMgr_StartNewPage: 12106,
    ePC_ProcMgr_Unload: 12107,
    ePC_ProcMgr_CheckDatabase: 12109,
    ePC_ProcMgr_ComparePortraits: 12111,
};
export var eRequestCommand = {
    eReqCmd_RFid_SendData: 100,
    eReqCmd_RFid_Notify: 101,
    eReqCmd_RFid_GetDataForScenario: 102,
    eReqCmd_Torch_GetUVFoto: 200,
    eReqCmd_InternetSend: 300,
    eReqCmd_GetGuid: 400,
};
export var eRFID_AccessControl_ProcedureType = {
    ACPT_UNDEFINED: 0,
    ACPT_BAC: 1,
    ACPT_PACE: 2,
    ACPT_CA: 3,
    ACPT_TA: 4,
    ACPT_AA: 5,
    ACPT_RI: 6,
    ACPT_CARD_INFO: 10,
};
export var eRFID_AuthenticationProcedureType = {
    aptUndefined: 0,
    aptStandard: 1,
    aptAdvanced: 2,
    aptGeneral: 3,
};
export var eRFID_BaudRate = {
    rfbr_106: 1,
    rfbr_212: 2,
    rfbr_424: 4,
    rfbr_848: 8,
};
export var eRFID_CertificateType = {
    CT_UNDEFINED: 0,
    CT_CSCA: 1,
    CT_CSCA_LINK: 2,
    CT_DS: 3,
    CT_MLS: 4,
    CT_DEV_LS: 5,
    CT_DEF_LS: 6,
};
export var eRFID_DataFile_Type = {
    DFT_UNSPECIFIED: 0,
    DFT_PASSPORT_DG1: 1,
    DFT_PASSPORT_DG2: 2,
    DFT_PASSPORT_DG3: 3,
    DFT_PASSPORT_DG4: 4,
    DFT_PASSPORT_DG5: 5,
    DFT_PASSPORT_DG6: 6,
    DFT_PASSPORT_DG7: 7,
    DFT_PASSPORT_DG8: 8,
    DFT_PASSPORT_DG9: 9,
    DFT_PASSPORT_DG10: 10,
    DFT_PASSPORT_DG11: 11,
    DFT_PASSPORT_DG12: 12,
    DFT_PASSPORT_DG13: 13,
    DFT_PASSPORT_DG14: 14,
    DFT_PASSPORT_DG15: 15,
    DFT_PASSPORT_DG16: 16,
    DFT_PASSPORT_DG17: 17,
    DFT_PASSPORT_DG18: 18,
    DFT_PASSPORT_DG19: 19,
    DFT_PASSPORT_DG20: 20,
    DFT_PASSPORT_SOD: 21,
    DFT_PASSPORT_CVCA: 22,
    DFT_PASSPORT_COM: 23,
    DFT_ID_DG1: 101,
    DFT_ID_DG2: 102,
    DFT_ID_DG3: 103,
    DFT_ID_DG4: 104,
    DFT_ID_DG5: 105,
    DFT_ID_DG6: 106,
    DFT_ID_DG7: 107,
    DFT_ID_DG8: 108,
    DFT_ID_DG9: 109,
    DFT_ID_DG10: 110,
    DFT_ID_DG11: 111,
    DFT_ID_DG12: 112,
    DFT_ID_DG13: 113,
    DFT_ID_DG14: 114,
    DFT_ID_DG15: 115,
    DFT_ID_DG16: 116,
    DFT_ID_DG17: 117,
    DFT_ID_DG18: 118,
    DFT_ID_DG19: 119,
    DFT_ID_DG20: 120,
    DFT_ID_DG21: 121,
    DFT_DL_COM: 150,
    DFT_DL_DG1: 151,
    DFT_DL_DG2: 152,
    DFT_DL_DG3: 153,
    DFT_DL_DG4: 154,
    DFT_DL_DG5: 155,
    DFT_DL_DG6: 156,
    DFT_DL_DG7: 157,
    DFT_DL_DG8: 158,
    DFT_DL_DG9: 159,
    DFT_DL_DG10: 160,
    DFT_DL_DG11: 161,
    DFT_DL_DG12: 162,
    DFT_DL_DG13: 163,
    DFT_DL_DG14: 164,
    DFT_DL_SOD: 165,
    DFT_DL_CE: 166,
    DFT_DL_CVCA: 167,
    DFT_PACE_CARDACCESS: 200,
    DFT_PACE_CARDSECURITY: 201,
    DFT_PACE_CHIPSECURITY: 202,
    DFT_MIFARE_DATA: 300,
    DFT_MIFARE_VALIDITY: 301,
    DFT_AUTHENTICITYV2: 302,
    DFT_ATR: 400,
    DFT_ESIGN_PK: 500,
    DFT_ESIGN_SIGNEDDATA: 501,
    DFT_CERTIFICATE: 600,
    DFT_MASTERLIST: 601,
    DFT_DEFECTLIST: 602,
    DFT_DEVIATIONLIST: 603,
    DFT_APP_DIRECTORY: 700,
    DFT_SESSION: 701,
    DFT_LOGDATA: 702,
    DFT_CHIP_PROPERTIES: 703,
    DFT_USERDEFINED: 1000,
    getTranslation: function (value) {
        switch (value) {
            case this.DFT_MIFARE_DATA:
                return "MIFARE data";
            case this.DFT_PASSPORT_COM:
                return "EF.COM";
            case this.DFT_DL_COM:
                return "EF.COM";
            case this.DFT_PASSPORT_DG1:
                return "Machine Readable Zone (DG1)";
            case this.DFT_ID_DG1:
                return "Document type" + " (DG1)";
            case this.DFT_DL_DG1:
                return "Text data elements (DG1)";
            case this.DFT_PASSPORT_DG2:
                return "Biometry - Facial data (DG2)";
            case this.DFT_ID_DG2:
                return "Issuing state" + " (DG2)";
            case this.DFT_DL_DG2:
                return "License holder information (DG2)";
            case this.DFT_PASSPORT_DG3:
                return "Biometry - Fingerprint(s) (DG3)";
            case this.DFT_ID_DG3:
                return "Date of expiry" + " (DG3)";
            case this.DFT_DL_DG3:
                return "Issuing authority details (DG3)";
            case this.DFT_PASSPORT_DG4:
                return "Biometry - Iris Data (DG4)";
            case this.DFT_ID_DG4:
                return "Given name" + " (DG4)";
            case this.DFT_DL_DG4:
                return "Portrait image (DG4)";
            case this.DFT_PASSPORT_DG5:
                return "Portrait(s) (DG5)";
            case this.DFT_ID_DG5:
                return "Surname/given name at birth" + " (DG5)";
            case this.DFT_DL_DG5:
                return "Signature / usual mark image (DG5)";
            case this.DFT_PASSPORT_DG6:
                return "not defined (DG6)";
            case this.DFT_ID_DG6:
                return "Pseudonym" + " (DG6)";
            case this.DFT_DL_DG6:
                return "Biometry - Facial data (DG6)";
            case this.DFT_PASSPORT_DG7:
                return "Signature / usual mark image (DG7)";
            case this.DFT_ID_DG7:
                return "Academic title" + " (DG7)";
            case this.DFT_DL_DG7:
                return "Biometry - Fingerprint(s) (DG7)";
            case this.DFT_PASSPORT_DG8:
                return "not defined (DG8)";
            case this.DFT_ID_DG8:
                return "Date of birth" + " (DG8)";
            case this.DFT_DL_DG8:
                return "Biometry - Iris Data (DG8)";
            case this.DFT_PASSPORT_DG9:
                return "not defined (DG9)";
            case this.DFT_ID_DG9:
                return "Place of birth" + " (DG9)";
            case this.DFT_DL_DG9:
                return "Biometry - Other (DG9)";
            case this.DFT_PASSPORT_DG10:
                return "not defined (DG10)";
            case this.DFT_ID_DG10:
                return "Nationality" + " (DG10)";
            case this.DFT_DL_DG10:
                return "not defined (DG10)";
            case this.DFT_PASSPORT_DG11:
                return "Additional personal detail(s) (DG11)";
            case this.DFT_ID_DG11:
                return "Sex" + " (DG11)";
            case this.DFT_DL_DG11:
                return "Optional domestic data (DG11)";
            case this.DFT_PASSPORT_DG12:
                return "Additional document details (DG12)";
            case this.DFT_ID_DG12:
                return "Optional details" + " (DG12)";
            case this.DFT_DL_DG12:
                return "Non-match alert (DG12)";
            case this.DFT_PASSPORT_DG13:
                return "Optional detail(s) (DG13)";
            case this.DFT_ID_DG13:
                return "Undefined" + " (DG13)";
            case this.DFT_DL_DG13:
                return "Active Authentication info (DG13)";
            case this.DFT_PASSPORT_DG14:
                return "EAC info (DG14)";
            case this.DFT_ID_DG14:
                return "Undefined" + " (DG14)";
            case this.DFT_DL_DG14:
                return "EAC info (DG14)";
            case this.DFT_PASSPORT_DG15:
                return "Active Authentication info (DG15)";
            case this.DFT_ID_DG15:
                return "Undefined" + " (DG15)";
            case this.DFT_PASSPORT_DG16:
                return "Person(s) to notify (DG16)";
            case this.DFT_ID_DG16:
                return "Undefined" + " (DG16)";
            case this.DFT_PASSPORT_DG17:
                return "DG17";
            case this.DFT_ID_DG17:
                return "Place of registration" + " (DG17)";
            case this.DFT_PASSPORT_DG18:
                return "DG18";
            case this.DFT_ID_DG18:
                return "Place of registration" + " (DG18)";
            case this.DFT_PASSPORT_DG19:
                return "DG19";
            case this.DFT_ID_DG19:
                return "Residence permit 1" + " (DG19)";
            case this.DFT_PASSPORT_DG20:
                return "DG20";
            case this.DFT_ID_DG20:
                return "Residence permit 2" + " (DG20)";
            case this.DFT_ID_DG21:
                return "Optional details" + " (DG21)";
            case this.DFT_PASSPORT_SOD:
                return "EF.SOD";
            case this.DFT_DL_SOD:
                return "EF.SOD";
            case this.DFT_PASSPORT_CVCA:
                return "EF.CVCA";
            case this.DFT_MIFARE_VALIDITY:
                return "MIFARE validity";
            case this.DFT_PACE_CARDACCESS:
                return "EF.CardAccess";
            case this.DFT_PACE_CARDSECURITY:
                return "EF.CardSecurity";
            case this.DFT_PACE_CHIPSECURITY:
                return "EF.ChipSecurity";
            case this.DFT_CERTIFICATE:
                return "Certificate";
            case this.DFT_APP_DIRECTORY:
                return "App directory";
            case this.DFT_ATR:
                return "DFT_ATR";
            case this.DFT_AUTHENTICITYV2:
                return "DFT_CHIP_PROPERTIES";
            case this.DFT_CHIP_PROPERTIES:
                return "DFT_CHIP_PROPERTIES";
            case this.DFT_DEFECTLIST:
                return "DFT_DEFECTLIST";
            case this.DFT_DEVIATIONLIST:
                return "DFT_DEVIATIONLIST";
            case this.DFT_DL_CE:
                return "DFT_DL_CE";
            case this.DFT_DL_CVCA:
                return "DFT_DL_CVCA";
            case this.DFT_ESIGN_PK:
                return "DFT_ESIGN_PK";
            case this.DFT_ESIGN_SIGNEDDATA:
                return "DFT_ESIGN_SIGNEDDATA";
            case this.DFT_LOGDATA:
                return "DFT_LOGDATA";
            case this.DFT_MASTERLIST:
                return "DFT_MASTERLIST";
            case this.DFT_SESSION:
                return "DFT_SESSION";
            case this.DFT_UNSPECIFIED:
                return "DFT_UNSPECIFIED";
            case this.DFT_USERDEFINED:
                return "DFT_USERDEFINED";
            default:
                return value.toString();
        }
    }
};
export var eRFID_NotificationAndErrorCodes = {
    RFID_NOTIFICATION_ERROR: 65536,
    RFID_NOTIFICATION_DOCUMENT_READY: 65537,
    RFID_NOTIFICATION_READ_PROTOCOL4: 65539,
    RFID_NOTIFICATION_READ_PROTOCOL3: 65546,
    RFID_NOTIFICATION_PROGRESS: 65547,
    RFID_NOTIFICATION_TA_STEP: 65550,
    RFID_NOTIFICATION_SM_REQUIRED: 65551,
    RFID_NOTIFICATION_ISO_ERROR: 69632,
    RFID_NOTIFICATION_PA_REQUEST: 77824,
    RFID_NOTIFICATION_SM_ESTABLISHED: 81935,
    RFID_NOTIFICATION_PCSC_READER_DISCONNECTED: 131072,
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGED: 131073,
    RFID_NOTIFICATION_PCSC_BYTES_RECEIVED: 131074,
    RFID_NOTIFICATION_PCSC_TOTAL_READING_TIME: 131075,
    RFID_NOTIFICATION_PCSC_DATA_RECEIVED: 131076,
    RFID_NOTIFICATION_PCSC_BYTES_SENT: 131077,
    RFID_NOTIFICATION_PCSC_TOTAL_READING_SPEED: 131078,
    RFID_NOTIFICATION_PCSC_TOTAL_PROCESS_TIME: 131079,
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGING: 131080,
    RFID_NOTIFICATION_PCSC_EXT_LENGTH_SUPPORT: 131088,
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN: 131089,
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN_ITEM: 131090,
    RFID_NOTIFICATION_SCENARIO: 131104,
    RFID_NOTIFICATION_PCSC_READING_DATAGROUP: 196608,
    RFID_NOTIFICATION_PCSC_FILE_NOT_FOUND: 262144,
    RFID_NOTIFICATION_PCSC_END_OF_FILE: 327680,
    RFID_NOTIFICATION_PCSC_FILE_ACCESS_DENIED: 393216,
    RFID_NOTIFICATION_PCSC_APPLICATION_SELECTED: 458752,
    RFID_NOTIFICATION_AC_PROCEDURE_START: 524288,
    RFID_NOTIFICATION_AC_PROCEDURE_FINISH: 589824,
    RFID_NOTIFICATION_PA_SECURITY_OBJECT_CHECK: 655360,
    RFID_NOTIFICATION_PA_FILE_CHECK: 720896,
    RFID_NOTIFICATION_PCSC_UPDATING_DATAGROUP: 786432,
    RFID_NOTIFICATION_AUXILIARY_DATA_VALIDATION: 851968,
    RFID_NOTIFICATION_RI_SECTOR_ID: 917504,
    RFID_NOTIFICATION_BIOMETRICS_EMPTY_PLACEHOLDER: 983040,
    RFID_ERROR_NO_ERROR: 1,
    RFID_ERROR_ALREADY_DONE: 2,
    RFID_LAYER6_FILE_EOF1: -2147458430,
    RFID_LAYER6_PWD_DEACTIVATED: -2147458429,
    RFID_LAYER6_PWD_BLOCKED: -2147458112,
    RFID_LAYER6_PWD_SUSPENDED: -2147458111,
    RFID_LAYER6_PWD_BLOCKED_2: -2147456637,
    RFID_LAYER6_PWD_DEACTIVATED_2: -2147456636,
    RFID_LAYER6_PWD_SUSPENDED_2: -2147456635,
    RFID_LAYER6_MSE_SET_AT_FAILURE: -2046819578,
    RFID_LAYER6_INCORRECT_PARAMS: -2147456384,
    RFID_LAYER6_FILE_NOT_FOUND: -2147456382,
    RFID_LAYER6_NO_REFERENCE_DATA: -2147456376,
    RFID_LAYER6_FILE_EOF2: -2147456256,
    RFID_Error_GraphManager: -2147418112,
    RFID_ERROR_NO_CHIP_DETECTED: -2147418111,
    RFID_ERROR_NOT_AVAILABLE: -2147418110,
    RFID_ERROR_INVALID_PARAMETER: -2147418108,
    RFID_ERROR_NOT_INITIALIZED: -2147418107,
    RFID_Error_NotEnoughMemory: -2147418106,
    RFID_ERROR_INVALID_DIRECTORY: -2147418104,
    RFID_ERROR_UNKNOWN_COMMAND: -2147418103,
    RFID_ERROR_FILE_IO_ERROR: -2147418102,
    RFID_ERROR_BUSY: -2147418101,
    RFID_ERROR_OLD_FIRMWARE: -2147418100,
    RFID_ERROR_PCSC_FAILED: -2147352576,
    RFID_ERROR_PCSC_READER_NOT_AVAILABLE: -2147352575,
    RFID_ERROR_PCSC_CANT_CONNECT_CARD: -2147352574,
    RFID_ERROR_PCSC_CARD_IS_NOT_CONNECTED: -2147352573,
    RFID_ERROR_PCSC_OPERATION_CANCELLED: -2147352572,
    RFID_ERROR_PCSC_CARD_IS_BUSY: -2147352571,
    RFID_ERROR_PCSC_FAILED_S_CARD: -2147352570,
    RFID_ERROR_PCSC_EXT_LE_FAILED: -2147352560,
    RFID_LAYER6_PWD_FAILED: -2146409536,
    RFID_ERROR_NOT_PERFORMED: -2097152000,
    RFID_ERROR_SESSION_IS_CLOSED: -2097151999,
    RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: -2097151998,
    RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: -2097151984,
    RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: -2097151983,
    RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: -2097151982,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: -2097151981,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNSUPPORTED: -2097151980,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_NOT_SET: -2097151979,
    RFID_ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE: -2097151978,
    RFID_ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE: -2097151977,
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE: -2097151976,
    RFID_ERROR_SESSION_ACCESS_KEY_RESTRICTED: -2097151975,
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA: -2097151974,
    RFID_ERROR_SESSION_ACCESS_KEY_NOT_SET: -2097151973,
    RFID_ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED: -2097151972,
    RFID_ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE: -2097151968,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM: -2097151967,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE: -2097151966,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS: -2097151965,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA: -2097151964,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA: -2097151963,
    RFID_ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA: -2097151962,
    RFID_ERROR_SESSION_ACCESS_CONTROL_CA_FAILED: -2097151961,
    RFID_ERROR_SESSION_ACCESS_CONTROL_TA_FAILED: -2097151960,
    RFID_ERROR_SESSION_ACCESS_CONTROL_AA_FAILED: -2097151959,
    RFID_ERROR_SESSION_ACCESS_CONTROL_RI_FAILED: -2097151958,
    RFID_ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED: -2097151952,
    RFID_ERROR_SESSION_PA_HASH_CHECK_FAILED: -2097151951,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY: -2097151936,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH: -2097151935,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID: -2097151934,
    RFID_ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION: -2097151920,
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_SET: -2097151919,
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED: -2097151918,
    RFID_ERROR_SESSION_INCORRECT_DATA: -2097151904,
    RFID_ERROR_SESSION_FILE_NOT_ENOUGH_DATA: -2097086464,
    RFID_ERROR_SESSION_FILE_INCORRECT_DATA: -2097020928,
    RFID_ERROR_SESSION_FILE_UNEXPECTED_DATA: -2096955392,
    RFID_ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA: -2096889856,
    RFID_ERROR_SESSION_FILE_WRONG_TAG: -2096824320,
    RFID_ERROR_SESSION_FILE_CANT_USE_DATA: -2096758784,
    RFID_ERROR_SESSION_FILE_CANT_READ_DATA: -2096693248,
    RFID_ERROR_SESSION_FILE_ACCESS_DENIED: -2096627712,
    RFID_LAYER6_SECURITY_MANAGER: -2046820352,
    RFID_LAYER6_APP_SELECTION_FAILURE: -2046820351,
    RFID_LAYER6_MUTUAL_AUTH_MAC_FAIL: -2046820096,
    RFID_LAYER6_MUTUAL_AUTH_ENC_FAIL: -2046820095,
    RFID_LAYER6_MUTUAL_AUTH_FAILURE: -2046820094,
    RFID_LAYER6_SM_DO8E_MISSING: -2046819840,
    RFID_LAYER6_SM_DO87_MISSING: -2046819839,
    RFID_LAYER6_SM_DO99_MISSING: -2046819838,
    RFID_LAYER6_SM_MAC_INCORRECT: -2046819837,
    RFID_LAYER6_SM_DO87_INCORRECT: -2046819836,
    RFID_LAYER6_NON_TLV_RESPONSE_DATA: -2046819584,
    RFID_LAYER6_WRONG_RND_ICC_LENGTH: -2046819583,
    RFID_LAYER6_INT_AUTH_FAILURE: -2046819582,
    RFID_LAYER6_MSE_SET_KAT_FAILURE: -2046819581,
    RFID_LAYER6_MSE_SET_DST_FAILURE: -2046819580,
    RFID_LAYER6_PSO_CERTIFICATE_FAILURE: -2046819579,
    RFID_LAYER6_GET_CHALLENGE_FAILURE: -2046819577,
    RFID_LAYER6_EXT_AUTH_FAILURE: -2046819576,
    RFID_LAYER6_GENERAL_AUTH_FAILURE: -2046819575,
    RFID_ERROR_FAILED: -1,
    getTranslation: function (value) {
        switch (value) {
            case this.RFID_ERROR_NO_ERROR:
                return "OK";
            case -2147483647:
                return "Error - ASN: Incorrect data";
            case -2147483646:
                return "Error - ASN: Not enough data";
            case -2147483645:
                return "Error - ASN: Contents unexpected data";
            case -2147483640:
                return "Error - ASN Signed data: Incorrect data";
            case -2147483639:
                return "Error - ASN Signed data: Encap contents incorrect data";
            case -2147483638:
                return "Error - ASN Signed data: Version incorrect data";
            case -2147483631:
                return "Error - ASN Signed data: Digest algorithms incorrect data";
            case -2147483629:
                return "Error - ASN LDS object: Incorrect data";
            case -2147483628:
                return "Error - ASN LDS object: Version incorrect data";
            case -2147483627:
                return "Error - ASN LDS object: Digest algorithm incorrect data";
            case -2147483626:
                return "Error - ASN LDS object: DG hashes incorrect data";
            case -2147483630:
                return "Error - ASN LDS object: Version info incorrect data";
            case -2147483625:
                return "Error - ASN Certificate: Incorrect data";
            case -2147483624:
                return "Error - ASN Certificate: Version incorrect data";
            case -2147483623:
                return "Error - ASN Certificate: SN incorrect data";
            case -2147483622:
                return "Error - ASN Certificate: Signature incorrect data";
            case -2147483621:
                return "Error - ASN Certificate: Issuer incorrect data";
            case -2147483620:
                return "Error - ASN Certificate: Validity incorrect data";
            case -2147483619:
                return "Error - ASN Certificate: Subject incorrect data";
            case -2147483618:
                return "Error - ASN Certificate: Subject PK incorrect data";
            case -2147483617:
                return "Error - ASN Certificate: Extensions incorrect data";
            case -2147483616:
                return "Error - ASN Signer info: Incorrect data";
            case -2147483615:
                return "Error - ASN Signer info: Version incorrect data";
            case -2147483614:
                return "Error - ASN Signer info: SID incorrect data";
            case -2147483613:
                return "Error - ASN Signer info: Digest algorithms incorrect data";
            case -2147483612:
                return "Error - ASN Signer info: Signed attributes incorrect data";
            case -2147483611:
                return "Error - ASN Signer info: Sign algorithms incorrect data";
            case -2147483610:
                return "Error - ASN Signer info: Signature incorrect data";
            case -2147483609:
                return "Error - ASN Signer info: Unsigned attributes incorrect data";
            case -2147483600:
                return "Error - ICAO LDS object: Unsupported digest algorithm";
            case -2147483599:
                return "Error - ICAO Signed data: Signer infos empty";
            case -2147483598:
                return "Error - ICAO Signer info: Unsupported digest algorithm";
            case -2147483597:
                return "Error - ICAO Signer info: Unsupported signature algorithm";
            case -2147483596:
                return "Error - ICAO Signer info: Message digest error";
            case -2147483594:
                return "Error - ICAO Signer info: Signed attributes missed";
            case -2147483595:
                return "Error - Auth: Signer info cant find certificate";
            case -2147483568:
                return "Error - Auth: Error";
            case -2147483567:
                return "Error - Auth: Unsupported signature algorithm";
            case -2147483566:
                return "Error - Auth: Unsupported public key algorithm";
            case -2147483565:
                return "Error - Auth: Messed algorithms";
            case -2147483564:
                return "Error - Auth: Public key data invalid";
            case -2147483563:
                return "Error - Auth: Algorithm parameters data invalid";
            case -2147483562:
                return "Error - Auth: Signature data invalid";
            case -2147483561:
                return "Error - Auth: Unsupported digest algorithm";
            case -2147483560:
                return "Error - Auth: Signature data incorrect";
            case -2147483559:
                return "Error - Auth: Algorithm parameters not defined";
            case -2147483558:
                return "Error - Auth: Signature check failed";
            case -2147483536:
                return "Error - DG: Wrong Tag";
            case -2130706400:
                return "Error - PACE: Info Not Available";
            case -2130706399:
                return "Error - PACE: Symmetric Cypher Cannot Initialize";
            case -2130706398:
                return "Error - PACE: Key Agreement Cannot Initialize";
            case -2130706397:
                return "Error - PACE: Ephemeral Keys Cannot Create";
            case -2130706396:
                return "Error - PACE: Mapping Cannot Decode Nonce";
            case -2130706395:
                return "Error - PACE: Shared Secret Cannot Create";
            case -2130706394:
                return "Error - PACE: Domain Params Unsupported Format";
            case -2130706393:
                return "Error - PACE: Ephemeral Keys Incorrect";
            case -2130706392:
                return "Error - PACE: Mapping Ephemeral Keys Incorrect";
            case -2130706391:
                return "Error - PACE: Mapping Cannot Perform";
            case -2130706390:
                return "Error - PACE: Non Matching Auth Tokens";
            case -2130706384:
                return "Error - CA: Cannot Find Public Key";
            case -2130706383:
                return "Error - CA: Cannot Find Info";
            case -2130706382:
                return "Error - CA: Incorrect Version";
            case -2130706381:
                return "Error - CA: Cannot Find Domain Parameters";
            case -2130706380:
                return "Error - CA: Key Agreement Cannot Initialize";
            case -2130706379:
                return "Error - CA: Public Key Unsupported Algorithm";
            case -2130706378:
                return "Error - CA: Ephemeral Keys Cannot Create";
            case -2130706377:
                return "Error - CA: Shared Secret Cannot Create";
            case -2130706376:
                return "Error - CA: Non Matching Auth Tokens";
            case -2130706368:
                return "Error - TA: Incorrect Version";
            case -2130706367:
                return "Error - TA: Cannot Build Certificate Chain";
            case -2130706366:
                return "Error - TA: Cannot Find IS Private Key";
            case -2130706365:
                return "Error - TA: Public Key Unsupported Algorithm";
            case -2130706364:
                return "Error - TA: Signature Building Error";
            case -2130706363:
                return "Error - TA: Invalid Key Algorithm Parameters";
            case -2130706352:
                return "Error - AA: Public Key Unsupported Algorithm";
            case -2130706351:
                return "Error - AA: Public Key Incorrect Data";
            case -2130706350:
                return "Error - AA: Public Key Incorrect Parameters";
            case -2130706349:
                return "Error - AA: Public Key Undefined Parameters";
            case -2130706348:
                return "Error - AA: Signature Incorrect Data";
            case -2130706347:
                return "Error - AA: Unsupported recovery scheme";
            case -2130706346:
                return "Error - AA: Incorrect Trailer";
            case -2130706345:
                return "Error - AA: Unsupported Digest Algorithm";
            case -2130706320:
                return "Error - RI: Sector Key Cannot Find";
            case -2130706319:
                return "Error - RI: Sector Key Incorrect Data";
            case -2130706318:
                return "Error - RI: Sector Key Incomplete Data";
            case -2130706336:
                return "Error - CV Certificate: Missing mandatory data PK";
            case -2130706334:
                return "Error - CV Certificate: Public key unsupported";
            case -2130706333:
                return "Error - CV Certificate: CHAT unsupported terminal type";
            case -2130706332:
                return "Error - CV Certificate: Private key unsupported";
            case -2130706331:
                return "Error - CV Certificate: Private key invalid params";
            case -2130706080:
                return "Error - CV Certificate: Incorrect data";
            case -2130706079:
                return "Error - CV Certificate: CPI incorrect data";
            case -2130706078:
                return "Error - CV Certificate: CAR incorrect data";
            case -2130706077:
                return "Error - CV Certificate: Public key incorrect data";
            case -2130706076:
                return "Error - CV Certificate: CHR incorrect data";
            case -2130706075:
                return "Error - CV Certificate: CHAT incorrect data";
            case -2130706074:
                return "Error - CV Certificate: Valid from incorrect data";
            case -2130706073:
                return "Error - CV Certificate: Valid to incorrect data";
            case -2130706072:
                return "Error - CV Certificate: Extensions incorrect data";
            case -2130706071:
                return "Error - CV Certificate: Private key incorrect data";
            case -2130706070:
                return "Error - CV Certificate: Private key missing";
            case -1879048191:
                return "Notification - ASN certificate: Incorrect version";
            case -1879048190:
                return "Notification - ASN certificate: Non matching signature algorithm";
            case -1879048189:
                return "Notification - ASN certificate: Incorrect time coding";
            case -1879048188:
                return "Notification - ASN certificate: Incorrect use of generalized time";
            case -1879048187:
                return "Notification - ASN certificate: Empty issuer";
            case -1879048186:
                return "Notification - ASN certificate: Empty subject";
            case -1879048184:
                return "Notification - ASN certificate: Unsupported critical extension";
            case -1879048178:
                return "Notification - ASN certificate: Forced default CSCA role";
            case -1879048177:
                return "Notification - ASN certificate: Forced Default DS role";
            case -1879048176:
                return "Notification - ASN certificate: Incorrect issuer subject DS";
            case -1879048169:
                return "Notification - ASN certificate: Duplicating extensions";
            case -1879047680:
                return "Notification - ICAO certificate: Version missed";
            case -1879047679:
                return "Notification - ICAO certificate: Version incorrect";
            case -1879047678:
                return "Notification - ICAO certificate: Issuer country missed";
            case -1879047677:
                return "Notification - ICAO certificate: Issuer common name missed";
            case -1879047676:
                return "Notification - ICAO certificate: Issuer country non compliant";
            case -1879047675:
                return "Notification - ICAO certificate: Subject country missed";
            case -1879047674:
                return "Notification - ICAO certificate: Subject common name missed";
            case -1879047673:
                return "Notification - ICAO certificate: Subject country non compliant";
            case -1879047672:
                return "Notification - ICAO certificate: Using non compliant data";
            case -1879047671:
                return "Notification - ICAO certificate: Unsupported signature algorithm";
            case -1879047670:
                return "Notification - ICAO certificate: Unsupported public key algorithm";
            case -1879047669:
                return "Notification - ICAO certificate: Missed extensions";
            case -1879047668:
                return "Notification - ICAO certificate: Validity";
            case -1879047667:
                return "Notification - ICAO certificate extension: Using non compliant data";
            case -1879047666:
                return "Notification - ICAO certificate extension: Key usage missed";
            case -1879047665:
                return "Notification - ICAO certificate extension: Key usage not critical";
            case -1879047664:
                return "Notification - ICAO certificate extension: Ext key usage incorrect data";
            case -1879047663:
                return "Notification - ICAO certificate extension: Basic constraints missed";
            case -1879047662:
                return "Notification - ICAO certificate extension: Basic constraints incorrect usage 1";
            case -1879047661:
                return "Notification - ICAO certificate extension: Basic constraints incorrect usage 2";
            case -1879047660:
                return "Notification - ICAO certificate extension: Basic constraints not critical";
            case -1879047659:
                return "Notification - ICAO certificate extension: Basic constraints incorrect data";
            case -1879047658:
                return "Notification - ICAO certificate extension: Basic constraints path LenC missed";
            case -1879047657:
                return "Notification - ICAO certificate extension: Basic constraints path LenC incorrect";
            case -1879047656:
                return "Notification - ICAO certificate extension: Ext key usage not critical";
            case -1879047655:
                return "Notification - ICAO certificate extension: Ext key usage incorrect usage";
            case -1879047654:
                return "Notification - ICAO certificate extension: Ext key usage incorrect data";
            case -1879047653:
                return "Notification - ICAO certificate extension Auth key: ID missed";
            case -1879047652:
                return "Notification - ICAO certificate extension Auth key: Incorrect data";
            case -1879047651:
                return "Notification - ICAO certificate extension Auth key: Key ID missed";
            case -1879047650:
                return "Notification - ICAO certificate extension: Subject key ID missed";
            case -1879047649:
                return "Notification - ICAO certificate extension: Subject key ID incorrect data";
            case -1879047648:
                return "Notification - ICAO certificate extension: Private key UP missed";
            case -1879047647:
                return "Notification - ICAO certificate extension: Private key UP incorrect data";
            case -1879047646:
                return "Notification - ICAO certificate extension: Private key UP empty";
            case -1879047645:
                return "Notification - ICAO certificate extension: Subject alt name missed";
            case -1879047644:
                return "Notification - ICAO certificate extension: Subject alt name incorrect data";
            case -1879047643:
                return "Notification - ICAO certificate extension: Subject alt name empty";
            case -1879047642:
                return "Notification - ICAO certificate extension: Subject alt name non compliant";
            case -1879047639:
                return "Notification - ICAO certificate extension: Subject alt name DN empty";
            case -1879047638:
                return "Notification - ICAO certificate extension: Subject alt name DN incorrect";
            case -1879047637:
                return "Notification - ICAO certificate extension: Subject alt name DN non compliant";
            case -1879047636:
                return "Notification - ICAO certificate extension: Issuer alt name missed";
            case -1879047635:
                return "Notification - ICAO certificate extension: Issuer alt name incorrect data";
            case -1879047634:
                return "Notification - ICAO certificate extension: Issuer alt name empty";
            case -1879047633:
                return "Notification - ICAO certificate extension: Issuer alt name non compliant";
            case -1879047630:
                return "Notification - ICAO certificate extension: Issuer alt name DN empty";
            case -1879047629:
                return "Notification - ICAO certificate extension: Issuer alt name DN incorrect";
            case -1879047628:
                return "Notification - ICAO certificate extension: Issuer alt name DN non compliant";
            case -1879047627:
                return "Notification - ICAO certificate extension Doc type list: Missed";
            case -1879047626:
                return "Notification - ICAO certificate extension Doc type list: Incorrect data";
            case -1879047625:
                return "Notification - ICAO certificate extension Doc type list: Version";
            case -1879047624:
                return "Notification - ICAO certificate extension Doc type list: Doc types";
            case -1879047623:
                return "Notification - ICAO certificate extension Doc type list: Doc types empty";
            case -1879047622:
                return "Notification - ICAO certificate extension: Dert policies incorrect data";
            case -1879047621:
                return "Notification - ICAO certificate extension: Cert policies empty";
            case -1879047620:
                return "Notification - ICAO certificate extension: Cert policies policy ID missed";
            case -1879047619:
                return "Notification - ICAO certificate extension: CRL dist point missed";
            case -1879047618:
                return "Notification - ICAO certificate extension: CRL dist point incorrect data";
            case -1879047617:
                return "Notification - ICAO certificate extension: CRL dist point empty";
            case -1879047616:
                return "Notification - ICAO certificate extension: CRL dist point point missed";
            case -1879048160:
                return "Notification - ICAO COM: LDS version incorrect";
            case -1879048159:
                return "Notification - ICAO COM: LDS version missing";
            case -1879048158:
                return "Notification - ICAO COM: Unicode version incorrect";
            case -1879048157:
                return "Notification - ICAO COM: Unicode version missing";
            case -1879048156:
                return "Notification - ICAO COM: DGPM incorrect";
            case -1879048155:
                return "Notification - ICAO COM: DGPM missing";
            case -1879048154:
                return "Notification - ICAO COM: DGPM unexpected";
            case -1879048144:
                return "Notification - ICAO application: LDS version unsupported";
            case -1879048143:
                return "Notification - ICAO application: Unicode version unsupported";
            case -1879048142:
                return "Notification - ICAO application: LDS version inconsistent";
            case -1879048141:
                return "Notification - ICAO application: Unicode version inconsistent";
            case -1879047936:
                return "Notification - ASN signed data: OID incorrect";
            case -1879047776:
                return "Notification - ASN signed data: Version incorrect";
            case -1879047935:
                return "Notification - ICAO signed data: Version incorrect";
            case -1879047934:
                return "Notification - ICAO signed data: Digest algorithms empty";
            case -1879047933:
                return "Notification - ICAO signed data: Digest algorithms unsupported";
            case -1879047927:
                return "Notification - ICAO signed data: Signer infos multiple entries";
            case -1879047760:
                return "Notification - ICAO signed data: Certificates missed";
            case -1879047759:
                return "Notification - ICAO signed data: Certificates empty";
            case -1879047758:
                return "Notification - ICAO signed data: CRLs incorrect usage";
            case -1879047932:
                return "Notification - ICAO LDS object: Incorrect content OID";
            case -1879047931:
                return "Notification - ICAO LDS object: DG number incorrect";
            case -1879047930:
                return "Notification - ICAO LDS object: DG hash missing";
            case -1879047929:
                return "Notification - ICAO LDS object: DG hash extra";
            case -1879047928:
                return "Notification - ICAO LDS object: Version incorrect";
            case -1879047744:
                return "Notification - ICAO master list: Version incorrect";
            case -1879047926:
                return "Notification - ASN signer info: Version incorrect";
            case -1879047925:
                return "Notification - ASN signer info: SID incorrect choice";
            case -1879047924:
                return "Notification - ASN signer info: SID digest algorithm not listed";
            case -1879047923:
                return "Notification - ASN signer info: Message digest attr missing";
            case -1879047922:
                return "Notification - ASN signer info: Message digest attr data";
            case -1879047921:
                return "Notification - ASN signer info: Message digest attr value";
            case -1879047920:
                return "Notification - ASN signer info: Content type attr missing";
            case -1879047919:
                return "Notification - ASN signer info: Content type attr data";
            case -1879047918:
                return "Notification - ASN signer info: Content type attr value";
            case -1879047909:
                return "Notification - ASN signer info: Signing time attr missing";
            case -1879047908:
                return "Notification - ASN signer info: Signing time attr data";
            case -1879047907:
                return "Notification - ASN signer info: Signing time attr value";
            case -1879047915:
                return "Notification - Auth signer info: Certificate validity";
            case -1879047914:
                return "Notification - Auth signer info: Certificate root is not trusted";
            case -1879047913:
                return "Notification - Auth signer info: Certificate cant find CSCA";
            case -1879047912:
                return "Notification - Auth signer info: Certificate revoked";
            case -1879047911:
                return "Notification - Auth signer info: Certificate signature invalid";
            case -1879047910:
                return "Notification: Unsupported image format";
            case 139272:
                return "Notification - MRZ: Document type unknown";
            case 139273:
                return "Notification - MRZ: Issuing state syntax error";
            case 139274:
                return "Notification - MRZ: Name is void";
            case 139277:
                return "Notification - MRZ: Number incorrect checksum";
            case 139278:
                return "Notification - MRZ: Nationality syntax error";
            case 139279:
                return "Notification - MRZ: DOB syntax error";
            case 139280:
                return "Notification - MRZ: DOB error";
            case 139281:
                return "Notification - MRZ: DOB incorrect checksum";
            case 139282:
                return "Notification - MRZ: Sex incorrect";
            case 139283:
                return "Notification - MRZ: DOE syntax error";
            case 139284:
                return "Notification - MRZ: DOE error";
            case 139285:
                return "Notification - MRZ: DOE incorrect checksum";
            case 139286:
                return "Notification - MRZ: Optional data incorrect checksum";
            case 139287:
                return "Notification - MRZ: Incorrect checksum";
            case 139288:
                return "Notification - MRZ: Incorrect";
            case -1878982656:
                return "Notification - Biometrics: Format owner missing";
            case -1878917120:
                return "Notification - Biometrics: Format owner incorrect";
            case -1878851584:
                return "Notification - Biometrics: Format type missing";
            case -1878786048:
                return "Notification - Biometrics: Format type incorrect";
            case -1878720512:
                return "Notification - Biometrics: Type incorrect";
            case -1878654976:
                return "Notification - Biometrics: Subtype missing";
            case -1878589440:
                return "Notification - Biometrics: Subtype incorrect";
            case -1878523904:
                return "Notification - Biometrics: BDB image missing";
            case -1878458368:
                return "Notification - Biometrics: BDB format ID incorrect";
            case -1878392832:
                return "Notification - Biometrics: BDB version incorrect";
            case -1878327296:
                return "Notification - Biometrics: BDB data length incorrect";
            case -1877999616:
                return "Notification - Biometrics: BDB Data Gender";
            case -1877934080:
                return "Notification - Biometrics: BDB Data Eye Color";
            case -1877868544:
                return "Notification - Biometrics: BDB Data Hair Color";
            case -1877803008:
                return "Notification - Biometrics: BDB Data Pose Angle Yaw";
            case -1877737472:
                return "Notification - Biometrics: BDB Data Pose Angle Pitch";
            case -1877671936:
                return "Notification - Biometrics: BDB Data Pose Angle Roll";
            case -1877606400:
                return "Notification - Biometrics: BDB Data Pose Angle U Yaw";
            case -1877540864:
                return "Notification - Biometrics: BDB Data Pose Angle U Pitch";
            case -1877475328:
                return "Notification - Biometrics: BDB Data Pose Angle U Roll";
            case -1877409792:
                return "Notification - Biometrics: BDB Data Face Image Type";
            case -1877344256:
                return "Notification - Biometrics: BDB Data Image Data Type";
            case -1862270976:
                return "Notification - SI: PACE Info Unsupported Std Parameters";
            case -1862270975:
                return "Notification - SI: PACE Info Deprecated Version";
            case -1862270974:
                return "Notification - SI: PACE Domain Params Using Std Ref";
            case -1862270973:
                return "Notification - SI: PACE Domain Params Unsupported Algorithm";
            case -1862270972:
                return "Notification - SI: CA Info Incorrect Version";
            case -1862270971:
                return "Notification - SI: CA PublicKey Unsupported Algorithm";
            case -1862270970:
                return "Notification - SI: CA Domain Params Unsupported Algorithm";
            case -1862270969:
                return "Notification - SI: TA Info Incorrect Version";
            case -1862270968:
                return "Notification - SI: TA Info File ID For Version 2";
            case -1862270967:
                return "Notification - SI: eID Security Unsupported Digest Algorithm";
            case -1862270966:
                return "Notification - SI: RI info incorrect version";
            case -1862270965:
                return "Notification - SI: RI domain params unsupported algorithm";
            case -1862270964:
                return "Notification - SI: AA info incorrect version";
            case -1862270963:
                return "Notification - SI: AA info unsupported algorithm";
            case -1862270962:
                return "Notification - SI: AA info inconsistent algorithm reference";
            case -1862270720:
                return "Notification - SI: PACE Info Not Available";
            case -1862270719:
                return "Notification - SI: PACE Info No Std Parameters";
            case -1862270718:
                return "Notification - SI: PACE Info No Matching Domain Params";
            case -1862270717:
                return "Notification - SI: CA Info Not Available";
            case -1862270716:
                return "Notification - SI: CA Domain Params No Required Option";
            case -1862270715:
                return "Notification - SI: CA Domain Params Not Available";
            case -1862270714:
                return "Notification - SI: CA Anonymous Infos";
            case -1862270713:
                return "Notification - SI: CA Info No Matching Domain Params";
            case -1862270712:
                return "Notification - SI: CA Info No Matching Public Key";
            case -1862270711:
                return "Notification - SI: CA Incorrect Infos Quantity";
            case -1862270710:
                return "Notification - SI: TA Info Not Available";
            case -1862270709:
                return "Notification - SI: Card Info Locator Multiple Entries";
            case -1862270708:
                return "Notification - SI: eID Security Info Multiple Entries";
            case -1862270707:
                return "Notification - SI: Privileged TI Multiple Entries";
            case -1862270706:
                return "Notification - SI: Privileged TI Incorrect Usage";
            case -1862270705:
                return "Notification - SI: RI domain params multiple entries";
            case -1862270704:
                return "Notification - SI: Storage PACE Info Non Consistant";
            case -1862270463:
                return "Notification - CV Certificate: Profile incorrect version";
            case -1862270462:
                return "Notification - CV Certificate: Validity";
            case -1862270461:
                return "Notification - CV Certificate: Non CVCA domain parameters";
            case -1862270460:
                return "Notification - CV Certificate: Private key incorrect version";
            case -1862270208:
                return "Notification - TA: PACE static binding used";
            case -1845493483:
                return "Notification - Auth ML signer info: Certificate validity";
            case -1845493482:
                return "Notification - Auth ML signer info: Certificate root is not trusted";
            case -1845493481:
                return "Notification - Auth ML signer info: Certificate cant find CSCA";
            case -1845493480:
                return "Notification - Auth ML signer info: Certificate revoked";
            case -1845493479:
                return "Notification - Auth ML signer info: Certificate signature invalid";
            case this.RFID_ERROR_ALREADY_DONE:
                return "RFID: Requested operation is already done";
            case this.RFID_ERROR_FAILED:
                return "RFID: Failed";
            case this.RFID_Error_GraphManager:
                return "RFID: Creation or connection to Graph Manager COM server failed";
            case this.RFID_ERROR_NO_CHIP_DETECTED:
                return "RFID: No chip is detected";
            case this.RFID_ERROR_NOT_AVAILABLE:
                return "RFID: Unavailable";
            case this.RFID_ERROR_INVALID_PARAMETER:
                return "RFID: Invalid parameter in ExecuteCommand() call found";
            case this.RFID_ERROR_NOT_INITIALIZED:
                return "RFID: Device is uninitialized";
            case this.RFID_Error_NotEnoughMemory:
                return "RFID: Out of memory";
            case this.RFID_ERROR_INVALID_DIRECTORY:
                return "RFID: Invalid directory";
            case this.RFID_ERROR_UNKNOWN_COMMAND:
                return "RFID: Unknown command";
            case this.RFID_ERROR_FILE_IO_ERROR:
                return "RFID File: IO Error";
            case this.RFID_ERROR_BUSY:
                return "RFID: RFID is Busy";
            case -2147418100:
                return "RFID: Firmware need to be updated with newer version";
            case -2147352576:
                return "PCSC: Failed";
            case -2147352575:
                return "PCSC: Reader is unavailable";
            case -2147352574:
                return "PCSC: Card cannot be connected";
            case -2147352573:
                return "PCSC: Card is not connected";
            case -2147352572:
                return "PCSC: Operation is cancelled";
            case -2147352571:
                return "PCSC: Card Is Busy";
            case -2147352570:
                return "PCSC: Failed Smart Card";
            case -2147352560:
                return "PCSC: ExtLe Failed";
            case -2046820352:
                return "LAYER6: Secure Messaging was not activated";
            case -2046820351:
                return "LAYER6: ISO7816_A_03 \"Application selection failure\"";
            case -2046820096:
                return "LAYER6: ISO7816_B_01 \"Mutual authentication MAC failure\"";
            case -2046820095:
                return "LAYER6: ISO7816_B_02 \"Mutual authentication encryption failure\"";
            case -2046820094:
                return "LAYER6: ISO7816_B_03 \"Mutual authentication failure\"";
            case -2046819840:
                return "LAYER6: SM failure – MAC missing";
            case -2046819839:
                return "LAYER6: SM failure – cryptogram missing";
            case -2046819838:
                return "LAYER6: SM failure – secured status bytes missing";
            case -2046819837:
                return "LAYER6: SM failure – incorrect MAC";
            case -2046819836:
                return "LAYER6: SM failure – incorrect cryptogram";
            case -2046819584:
                return "LAYER6: Not TLV response data";
            case -2046819583:
                return "LAYER6: Wrong data length (APDU_INS_GET_CHALLENGE)";
            case -2046819582:
                return "LAYER6: APDU_INS_INTERNAL_AUTHENTICATE failure";
            case -2046819581:
                return "LAYER6: MSE:Set KAT failure";
            case -2046819580:
                return "LAYER6: MSE:Set DST failure";
            case -2046819579:
                return "LAYER6: PSO CERTIFICATE failure";
            case -2046819578:
                return "LAYER6: MSE:Set AT failure";
            case -2046819577:
                return "LAYER6: GET CHALLENGE failure";
            case -2046819576:
                return "LAYER6: APDU_INS_EXTERNAL_AUTHENTICATE (External Authentication) failure";
            case -2046819575:
                return "LAYER6: General Authenticity Failure";
            case -2147456382:
                return "LAYER6: File selection failure / file not found";
            case -2147458430:
                return "LAYER6: Reading beyond EOF / Unexpected EOF";
            case -2147456256:
                return "LAYER6: Reading beyond EOF / Unexpected EOF";
            case -2147456384:
                return "LAYER6: Incorrect Params";
            case -2147456376:
                return "LAYER6: No Reference Data";
            case -2147458111:
                return "LAYER6: PWD Suspended";
            case -2147458112:
                return "LAYER6: PWD Blocked";
            case -2147458429:
                return "LAYER6: PWD Deactivatted";
            case -2147456637:
                return "LAYER6: PWD Blocked 2";
            case -2147456636:
                return "LAYER6: PWD Deactivated 2";
            case -2147456635:
                return "LAYER6: PWD Suspended 2";
            case -2146409536:
                return "LAYER6: PWD Failed";
            case -2097152000:
                return "RFID: Not Performed";
            case -2097151999:
                return "RFID: Session Is Closed";
            case -2097151998:
                return "RFID: Terminal Unsupported Operation";
            case -2097151984:
                return "RFID: Terminal Type Unknown";
            case -2097151983:
                return "RFID: Terminal Type Bad Certificate";
            case -2097151982:
                return "RFID: Terminal Type Not Set";
            case -2097151981:
                return "RFID: Procedure Type Unknown";
            case -2097151980:
                return "RFID: Procedure Type Unsupported";
            case -2097151979:
                return "RFID: Procedure Type Not Set";
            case -2097151978:
                return "RFID: Access Key Unknown Type";
            case -2097151977:
                return "RFID: Access Key Unsupported SM Type";
            case -2097151976:
                return "RFID: Access Key Incorrect SM Type";
            case -2097151975:
                return "RFID: Access Key Restricted";
            case -2097151974:
                return "RFID: Access Key Incorrect Data";
            case -2097151973:
                return "RFID: Access Key Not Set";
            case -2097151972:
                return "RFID: Pwd Management Not Authorized";
            case -2097151968:
                return "RFID: Access Control UnknownType";
            case -2097151967:
                return "RFID: Requires SM";
            case -2097151966:
                return "RFID: Requires PACE";
            case -2097151965:
                return "RFID: Requires CA Keys";
            case -2097151964:
                return "RFID: Requires TA";
            case -2097151963:
                return "RFID: Requires CA";
            case -2097151962:
                return "RFID: Incorrect Option CA";
            case -2097151961:
                return "RFID: CA Failed";
            case -2097151960:
                return "RFID: TA Failed";
            case -2097151959:
                return "RFID: AA Failed";
            case -2097151958:
                return "RFID: RI Failed";
            case -2097151952:
                return "RFID: SO Signature Check Failed";
            case -2097151951:
                return "RFID: Hash Check Failed";
            case -2097151936:
                return "RFID: Invalid Aux Data Date Of Expiry";
            case -2097151935:
                return "RFID: Invalid Aux Data Date Of Birth";
            case -2097151934:
                return "RFID: Invalid Aux Data Community ID";
            case -2097151920:
                return "RFID: eSign Requires App Selection";
            case -2097151919:
                return "RFID: eSign PIN Not Set";
            case -2097151918:
                return "RFID: eSign PIN Not Verified";
            case -2097151904:
                return "RFID: Incorrect data";
            case -2097086464:
                return "RFID File: Not Enough Data";
            case -2097020928:
                return "RFID File: Incorrect Data";
            case -2096955392:
                return "RFID File: Unexpected Data";
            case -2096889856:
                return "RFID File: Contents Unexpected Data";
            case -2096824320:
                return "RFID File: Wrong Tag";
            case -2096758784:
                return "RFID File: Cannot Use Data";
            case -2096693248:
                return "RFID File: Cannot Read Data";
            case this.RFID_ERROR_SESSION_FILE_ACCESS_DENIED:
                return "RFID File: Access Denied";
            default:
                return value.toString();
        }
    }
};
export var eRFID_Password_Type = {
    PPT_UNKNOWN: 0,
    PPT_MRZ: 1,
    PPT_CAN: 2,
    PPT_PIN: 3,
    PPT_PUK: 4,
    PPT_PIN_ESIGN: 5,
    PPT_SAI: 6,
};
export var eRFID_SDK_ProfilerType = {
    SPT_DOC_9303_EDITION_2006: 0x00000001,
    SPT_DOC_9303_LDS_PKI_MAINTENANCE: 0x00000002,
};
export var eRFID_TerminalType = {
    TET_UNDEFINED: 0,
    TET_INSPECTION_SYSTEM: 1,
    TET_AUTHENTICATION_TERMINAL: 2,
    TET_SIGNATURE_TERMINAL: 3,
    TET_UNAUTHENTICATED_TERMINAL: 4,
};
export var eRPRM_Authenticity = {
    NONE: 0,
    UV_LUMINESCENCE: 1,
    IR_B900: 2,
    IMAGE_PATTERN: 4,
    AXIAL_PROTECTION: 8,
    UV_FIBERS: 16,
    IR_VISIBILITY: 32,
    OCR_SECURITY_TEXT: 64,
    IPI: 128,
    PHOTO_EMBED_TYPE: 512,
    HOLOGRAMS: 4096,
    PHOTO_AREA: 8192,
    PORTRAIT_COMPARISON: 32768,
    BARCODE_FORMAT_CHECK: 65536,
    KINEGRAM: 131072,
    HOLOGRAMS_DETECTION: 524288,
};
export var eRPRM_FieldVerificationResult = {
    RCF_DISABLED: 0,
    RCF_VERIFIED: 1,
    RCF_NOT_VERIFIED: 2,
    RCF_COMPARE_TRUE: 3,
    RCF_COMPARE_FALSE: 4,
};
export var eRPRM_Lights = {
    NONE: 0,
    RPRM_LIGHT_UV: 128,
    RPRM_LIGHT_WHITE_FULL: 6,
    getTranslation: function (value) {
        switch (value) {
            case this.RPRM_LIGHT_UV:
                return "UV";
            case this.RPRM_LIGHT_WHITE_FULL:
                return "Visible light";
            default:
                return value.toString();
        }
    }
};
export var eRPRM_ResultType = {
    NONE: -1,
    RPRM_RESULT_TYPE_EMPTY: 0,
    RPRM_RESULT_TYPE_RAW_IMAGE: 1,
    RPRM_RESULT_TYPE_FILE_IMAGE: 2,
    RPRM_RESULT_TYPE_MRZ_OCR_EXTENDED: 3,
    RPRM_RESULT_TYPE_BARCODES: 5,
    RPRM_RESULT_TYPE_GRAPHICS: 6,
    RPRM_RESULT_TYPE_MRZ_TEST_QUALITY: 7,
    RPRM_RESULT_TYPE_DOCUMENT_TYPES_CANDIDATES: 8,
    RPRM_RESULT_TYPE_CHOSEN_DOCUMENT_TYPE_CANDIDATE: 9,
    RPRM_RESULT_TYPE_DOCUMENTS_INFO_LIST: 10,
    RPRM_RESULT_TYPE_OCR_LEXICAL_ANALYZE: 15,
    RPRM_RESULT_TYPE_RAW_UNCROPPED_IMAGE: 16,
    RPRM_RESULT_TYPE_VISUAL_OCR_EXTENDED: 17,
    RPRM_RESULT_TYPE_BAR_CODES_TEXT_DATA: 18,
    RPRM_RESULT_TYPE_BAR_CODES_IMAGE_DATA: 19,
    RPRM_RESULT_TYPE_AUTHENTICITY: 20,
    RPRM_RESULT_TYPE_EOS_IMAGE: 23,
    RPRM_RESULT_TYPE_BAYER_IMAGE: 24,
    RPRM_RESULT_TYPE_MAGNETIC_STRIPE: 25,
    RPRM_RESULT_TYPE_MAGNETIC_STRIPE_TEXT_DATA: 26,
    RPRM_RESULT_TYPE_FIELD_FILE_IMAGE: 27,
    RPRM_RESULT_TYPE_DATABASE_CHECK: 28,
    RPRM_RESULT_TYPE_FINGERPRINT_TEMPLATE_ISO: 29,
    RPRM_RESULT_TYPE_INPUT_IMAGE_QUALITY: 30,
    RPRM_RESULT_TYPE_DOCUMENT_POSITION: 85,
    RPRM_RESULT_TYPE_CUSTOM: 100,
    RFID_RESULT_TYPE_RFID_RAW_DATA: 101,
    RFID_RESULT_TYPE_RFID_TEXT_DATA: 102,
    RFID_RESULT_TYPE_RFID_IMAGE_DATA: 103,
    RFID_RESULT_TYPE_RFID_BINARY_DATA: 104,
    RFID_RESULT_TYPE_RFID_ORIGINAL_GRAPHICS: 105,
    RPRM_RESULT_TYPE_BARCODE_POSITION: 62,
    RPRM_RESULT_TYPE_MRZ_POSITION: 61,
};
export var eRPRM_SecurityFeatureType = {
    NONE: -1,
    SECURITY_FEATURE_TYPE_BLANK: 0,
    SECURITY_FEATURE_TYPE_FILL: 1,
    SECURITY_FEATURE_TYPE_PHOTO: 2,
    SECURITY_FEATURE_TYPE_MRZ: 3,
    SECURITY_FEATURE_TYPE_FALSE_LUMINESCENCE: 4,
    SECURITY_FEATURE_TYPE_HOLO_SIMPLE: 5,
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_STATIC: 6,
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_MULTI_STATIC: 7,
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_DINAMIC: 8,
    SECURITY_FEATURE_TYPE_PATTERN_NOT_INTERRUPTED: 9,
    SECURITY_FEATURE_TYPE_PATTERN_NOT_SHIFTED: 10,
    SECURITY_FEATURE_TYPE_PATTERN_SAME_COLORS: 11,
    SECURITY_FEATURE_TYPE_PATTERN_IR_INVISIBLE: 12,
    SECURITY_FEATURE_TYPE_PHOTO_SIZE_CHECK: 13,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_GHOST: 14,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_RFID: 15,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_VISUAL: 16,
    SECURITY_FEATURE_TYPE_BARCODE: 17,
    SECURITY_FEATURE_TYPE_PATTERN_DIFFERENT_LINES_THICKNESS: 18,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_CAMERA: 19,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_RFID_VS_CAMERA: 20,
    SECURITY_FEATURE_TYPE_GHOST_PHOTO: 21,
    SECURITY_FEATURE_TYPE_CLEAR_GHOST_PHOTO: 22,
    SECURITY_FEATURE_TYPE_INVISIBLE_OBJECT: 23,
    SECURITY_FEATURE_TYPE_LOW_CONTRAST_OBJECT: 24,
    SECURITY_FEATURE_TYPE_PHOTO_COLOR: 25,
    SECURITY_FEATURE_TYPE_PHOTO_SHAPE: 26,
    SECURITY_FEATURE_TYPE_PHOTO_CORNERS: 27,
    DOCUMENT_CANCELLING_DETECTOR: 28,
};
export var eSignManagementAction = {
    smaUndefined: 0,
    smaCreatePIN: 1,
    smaChangePIN: 2,
    smaUnblockPIN: 3,
    smaTerminatePIN: 4,
    smaGenerateKeys: 5,
    smaTerminateKeys: 6,
    smaSignData: 7,
};
export var eVisualFieldType = {
    FT_DOCUMENT_CLASS_CODE: 0,
    FT_ISSUING_STATE_CODE: 1,
    FT_DOCUMENT_NUMBER: 2,
    FT_DATE_OF_EXPIRY: 3,
    FT_DATE_OF_ISSUE: 4,
    FT_DATE_OF_BIRTH: 5,
    FT_PLACE_OF_BIRTH: 6,
    FT_PERSONAL_NUMBER: 7,
    FT_SURNAME: 8,
    FT_GIVEN_NAMES: 9,
    FT_MOTHERS_NAME: 10,
    FT_NATIONALITY: 11,
    FT_SEX: 12,
    FT_HEIGHT: 13,
    FT_WEIGHT: 14,
    FT_EYES_COLOR: 15,
    FT_HAIR_COLOR: 16,
    FT_ADDRESS: 17,
    FT_DONOR: 18,
    FT_SOCIAL_SECURITY_NUMBER: 19,
    FT_DL_CLASS: 20,
    FT_DL_ENDORSED: 21,
    FT_DL_RESTRICTION_CODE: 22,
    FT_DL_UNDER_21_DATE: 23,
    FT_AUTHORITY: 24,
    FT_SURNAME_AND_GIVEN_NAMES: 25,
    FT_NATIONALITY_CODE: 26,
    FT_PASSPORT_NUMBER: 27,
    FT_INVITATION_NUMBER: 28,
    FT_VISA_ID: 29,
    FT_VISA_CLASS: 30,
    FT_VISA_SUB_CLASS: 31,
    FT_MRZ_STRING_1: 32,
    FT_MRZ_STRING_2: 33,
    FT_MRZ_STRING_3: 34,
    FT_MRZ_TYPE: 35,
    FT_OPTIONAL_DATA: 36,
    FT_DOCUMENT_CLASS_NAME: 37,
    FT_ISSUING_STATE_NAME: 38,
    FT_PLACE_OF_ISSUE: 39,
    FT_DOCUMENT_NUMBER_CHECKSUM: 40,
    FT_DATE_OF_BIRTH_CHECKSUM: 41,
    FT_DATE_OF_EXPIRY_CHECKSUM: 42,
    FT_PERSONAL_NUMBER_CHECKSUM: 43,
    FT_FINAL_CHECKSUM: 44,
    FT_PASSPORT_NUMBER_CHECKSUM: 45,
    FT_INVITATION_NUMBER_CHECKSUM: 46,
    FT_VISA_ID_CHECKSUM: 47,
    FT_SURNAME_AND_GIVEN_NAMES_CHECKSUM: 48,
    FT_VISA_VALID_UNTIL_CHECKSUM: 49,
    FT_OTHER: 50,
    FT_MRZ_STRINGS: 51,
    FT_NAME_SUFFIX: 52,
    FT_NAME_PREFIX: 53,
    FT_DATE_OF_ISSUE_CHECKSUM: 54,
    FT_DATE_OF_ISSUE_CHECK_DIGIT: 55,
    FT_DOCUMENT_SERIES: 56,
    FT_REG_CERT_REG_NUMBER: 57,
    FT_REG_CERT_CAR_MODEL: 58,
    FT_REG_CERT_CAR_COLOR: 59,
    FT_REG_CERT_BODY_NUMBER: 60,
    FT_REG_CERT_CAR_TYPE: 61,
    FT_REG_CERT_MAX_WEIGHT: 62,
    FT_REG_CERT_WEIGHT: 63,
    FT_ADDRESS_AREA: 64,
    FT_ADDRESS_STATE: 65,
    FT_ADDRESS_BUILDING: 66,
    FT_ADDRESS_HOUSE: 67,
    FT_ADDRESS_FLAT: 68,
    FT_PLACE_OF_REGISTRATION: 69,
    FT_DATE_OF_REGISTRATION: 70,
    FT_RESIDENT_FROM: 71,
    FT_RESIDENT_UNTIL: 72,
    FT_AUTHORITY_CODE: 73,
    FT_PLACE_OF_BIRTH_AREA: 74,
    FT_PLACE_OF_BIRTH_STATE_CODE: 75,
    FT_ADDRESS_STREET: 76,
    FT_ADDRESS_CITY: 77,
    FT_ADDRESS_JURISDICTION_CODE: 78,
    FT_ADDRESS_POSTAL_CODE: 79,
    FT_DOCUMENT_NUMBER_CHECK_DIGIT: 80,
    FT_DATE_OF_BIRTH_CHECK_DIGIT: 81,
    FT_DATE_OF_EXPIRY_CHECK_DIGIT: 82,
    FT_PERSONAL_NUMBER_CHECK_DIGIT: 83,
    FT_FINAL_CHECK_DIGIT: 84,
    FT_PASSPORT_NUMBER_CHECK_DIGIT: 85,
    FT_INVITATION_NUMBER_CHECK_DIGIT: 86,
    FT_VISA_ID_CHECK_DIGIT: 87,
    FT_SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT: 88,
    FT_VISA_VALID_UNTIL_CHECK_DIGIT: 89,
    FT_PERMIT_DL_CLASS: 90,
    FT_PERMIT_DATE_OF_EXPIRY: 91,
    FT_PERMIT_IDENTIFIER: 92,
    FT_PERMIT_DATE_OF_ISSUE: 93,
    FT_PERMIT_RESTRICTION_CODE: 94,
    FT_PERMIT_ENDORSED: 95,
    FT_ISSUE_TIMESTAMP: 96,
    FT_NUMBER_OF_DUPLICATES: 97,
    FT_MEDICAL_INDICATOR_CODES: 98,
    FT_NON_RESIDENT_INDICATOR: 99,
    FT_VISA_TYPE: 100,
    FT_VISA_VALID_FROM: 101,
    FT_VISA_VALID_UNTIL: 102,
    FT_DURATION_OF_STAY: 103,
    FT_NUMBER_OF_ENTRIES: 104,
    FT_DAY: 105,
    FT_MONTH: 106,
    FT_YEAR: 107,
    FT_UNIQUE_CUSTOMER_IDENTIFIER: 108,
    FT_COMMERCIAL_VEHICLE_CODES: 109,
    FT_AKA_DATE_OF_BIRTH: 110,
    FT_AKA_SOCIAL_SECURITY_NUMBER: 111,
    FT_AKA_SURNAME: 112,
    FT_AKA_GIVEN_NAMES: 113,
    FT_AKA_NAME_SUFFIX: 114,
    FT_AKA_NAME_PREFIX: 115,
    FT_MAILING_ADDRESS_STREET: 116,
    FT_MAILING_ADDRESS_CITY: 117,
    FT_MAILING_ADDRESS_JURISDICTION_CODE: 118,
    FT_MAILING_ADDRESS_POSTAL_CODE: 119,
    FT_AUDIT_INFORMATION: 120,
    FT_INVENTORY_NUMBER: 121,
    FT_RACE_ETHNICITY: 122,
    FT_JURISDICTION_VEHICLE_CLASS: 123,
    FT_JURISDICTION_ENDORSEMENT_CODE: 124,
    FT_JURISDICTION_RESTRICTION_CODE: 125,
    FT_FAMILY_NAME: 126,
    FT_GIVEN_NAMES_RUS: 127,
    FT_VISA_ID_RUS: 128,
    FT_FATHERS_NAME: 129,
    FT_FATHERS_NAME_RUS: 130,
    FT_SURNAME_AND_GIVEN_NAMES_RUS: 131,
    FT_PLACE_OF_BIRTH_RUS: 132,
    FT_AUTHORITY_RUS: 133,
    FT_ISSUING_STATE_CODE_NUMERIC: 134,
    FT_NATIONALITY_CODE_NUMERIC: 135,
    FT_ENGINE_POWER: 136,
    FT_ENGINE_VOLUME: 137,
    FT_CHASSIS_NUMBER: 138,
    FT_ENGINE_NUMBER: 139,
    FT_ENGINE_MODEL: 140,
    FT_VEHICLE_CATEGORY: 141,
    FT_IDENTITY_CARD_NUMBER: 142,
    FT_CONTROL_NO: 143,
    FT_PARRENTS_GIVEN_NAMES: 144,
    FT_SECOND_SURNAME: 145,
    FT_MIDDLE_NAME: 146,
    FT_REG_CERT_VIN: 147,
    FT_REG_CERT_VIN_CHECK_DIGIT: 148,
    FT_REG_CERT_VIN_CHECKSUM: 149,
    FT_LINE_1_CHECK_DIGIT: 150,
    FT_LINE_2_CHECK_DIGIT: 151,
    FT_LINE_3_CHECK_DIGIT: 152,
    FT_LINE_1_CHECKSUM: 153,
    FT_LINE_2_CHECKSUM: 154,
    FT_LINE_3_CHECKSUM: 155,
    FT_REG_CERT_REG_NUMBER_CHECK_DIGIT: 156,
    FT_REG_CERT_REG_NUMBER_CHECKSUM: 157,
    FT_REG_CERT_VEHICLE_ITS_CODE: 158,
    FT_CARD_ACCESS_NUMBER: 159,
    FT_MARITAL_STATUS: 160,
    FT_COMPANY_NAME: 161,
    FT_SPECIAL_NOTES: 162,
    FT_SURNAME_OF_SPOSE: 163,
    FT_TRACKING_NUMBER: 164,
    FT_BOOKLET_NUMBER: 165,
    FT_CHILDREN: 166,
    FT_COPY: 167,
    FT_SERIAL_NUMBER: 168,
    FT_DOSSIER_NUMBER: 169,
    FT_AKA_SURNAME_AND_GIVEN_NAMES: 170,
    FT_TERRITORIAL_VALIDITY: 171,
    FT_MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS: 172,
    FT_DL_CDL_RESTRICTION_CODE: 173,
    FT_DL_UNDER_18_DATE: 174,
    FT_DL_RECORD_CREATED: 175,
    FT_DL_DUPLICATE_DATE: 176,
    FT_DL_ISS_TYPE: 177,
    FT_MILITARY_BOOK_NUMBER: 178,
    FT_DESTINATION: 179,
    FT_BLOOD_GROUP: 180,
    FT_SEQUENCE_NUMBER: 181,
    FT_REG_CERT_BODY_TYPE: 182,
    FT_REG_CERT_CAR_MARK: 183,
    FT_TRANSACTION_NUMBER: 184,
    FT_AGE: 185,
    FT_FOLIO_NUMBER: 186,
    FT_VOTER_KEY: 187,
    FT_ADDRESS_MUNICIPALITY: 188,
    FT_ADDRESS_LOCATION: 189,
    FT_SECTION: 190,
    FT_OCR_NUMBER: 191,
    FT_FEDERAL_ELECTIONS: 192,
    FT_REFERENCE_NUMBER: 193,
    FT_OPTIONAL_DATA_CHECKSUM: 194,
    FT_OPTIONAL_DATA_CHECK_DIGIT: 195,
    FT_VISA_NUMBER: 196,
    FT_VISA_NUMBER_CHECKSUM: 197,
    FT_VISA_NUMBER_CHECK_DIGIT: 198,
    FT_VOTER: 199,
    FT_PREVIOUS_TYPE: 200,
    FT_FIELD_FROM_MRZ: 220,
    FT_CURRENT_DATE: 221,
    FT_STATUS_DATE_OF_EXPIRY: 251,
    FT_BANKNOTE_NUMBER: 252,
    FT_CSC_CODE: 253,
    FT_ARTISTIC_NAME: 254,
    FT_ACADEMIC_TITLE: 255,
    FT_ADDRESS_COUNTRY: 256,
    FT_ADDRESS_ZIPCODE: 257,
    FT_E_ID_RESIDENCE_PERMIT_1: 258,
    FT_E_ID_RESIDENCE_PERMIT_2: 259,
    FT_E_ID_PLACE_OF_BIRTH_STREET: 260,
    FT_E_ID_PLACE_OF_BIRTH_CITY: 261,
    FT_E_ID_PLACE_OF_BIRTH_STATE: 262,
    FT_E_ID_PLACE_OF_BIRTH_COUNTRY: 263,
    FT_E_ID_PLACE_OF_BIRTH_ZIPCODE: 264,
    FT_CDL_CLASS: 265,
    FT_DL_UNDER_19_DATE: 266,
    FT_WEIGHT_POUNDS: 267,
    FT_LIMITED_DURATION_DOCUMENT_INDICATOR: 268,
    FT_ENDORSEMENT_EXPIRATION_DATE: 269,
    FT_REVISION_DATE: 270,
    FT_COMPLIANCE_TYPE: 271,
    FT_FAMILY_NAME_TRUNCATION: 272,
    FT_FIRST_NAME_TRUNCATION: 273,
    FT_MIDDLE_NAME_TRUNCATION: 274,
    FT_EXAM_DATE: 275,
    FT_ORGANIZATION: 276,
    FT_DEPARTMENT: 277,
    FT_PAY_GRADE: 278,
    FT_RANK: 279,
    FT_BENEFITS_NUMBER: 280,
    FT_SPONSOR_SERVICE: 281,
    FT_SPONSOR_STATUS: 282,
    FT_SPONSOR: 283,
    FT_RELATIONSHIP: 284,
    FT_USCIS: 285,
    FT_CATEGORY: 286,
    FT_CONDITIONS: 287,
    FT_IDENTIFIER: 288,
    FT_CONFIGURATION: 289,
    FT_DISCRETIONARY_DATA: 290,
    FT_LINE_1_OPTIONAL_DATA: 291,
    FT_LINE_2_OPTIONAL_DATA: 292,
    FT_LINE_3_OPTIONAL_DATA: 293,
    FT_EQV_CODE: 294,
    FT_ALT_CODE: 295,
    FT_BINARY_CODE: 296,
    FT_PSEUDO_CODE: 297,
    FT_FEE: 298,
    FT_STAMP_NUMBER: 299,
    FT_SBH_SECURITYOPTIONS: 300,
    FT_SBH_INTEGRITYOPTIONS: 301,
    FT_DATE_OF_CREATION: 302,
    FT_VALIDITY_PERIOD: 303,
    FT_PATRON_HEADER_VERSION: 304,
    FT_BDB_TYPE: 305,
    FT_BIOMETRIC_TYPE: 306,
    FT_BIOMETRIC_SUBTYPE: 307,
    FT_BIOMETRIC_PRODUCTID: 308,
    FT_BIOMETRIC_FORMAT_OWNER: 309,
    FT_BIOMETRIC_FORMAT_TYPE: 310,
    FT_PHONE: 311,
    FT_PROFESSION: 312,
    FT_TITLE: 313,
    FT_PERSONAL_SUMMARY: 314,
    FT_OTHER_VALID_ID: 315,
    FT_CUSTODY_INFO: 316,
    FT_OTHER_NAME: 317,
    FT_OBSERVATIONS: 318,
    FT_TAX: 319,
    FT_DATE_OF_PERSONALIZATION: 320,
    FT_PERSONALIZATION_SN: 321,
    FT_OTHERPERSON_NAME: 322,
    FT_PERSONTONOTIFY_DATE_OF_RECORD: 323,
    FT_PERSONTONOTIFY_NAME: 324,
    FT_PERSONTONOTIFY_PHONE: 325,
    FT_PERSONTONOTIFY_ADDRESS: 326,
    FT_DS_CERTIFICATE_ISSUER: 327,
    FT_DS_CERTIFICATE_SUBJECT: 328,
    FT_DS_CERTIFICATE_VALIDFROM: 329,
    FT_DS_CERTIFICATE_VALIDTO: 330,
    FT_VRC_DATAOBJECT_ENTRY: 331,
    FT_TYPE_APPROVAL_NUMBER: 332,
    FT_ADMINISTRATIVE_NUMBER: 333,
    FT_DOCUMENT_DISCRIMINATOR: 334,
    FT_DATA_DISCRIMINATOR: 335,
    FT_ISO_ISSUER_ID_NUMBER: 336,
    FT_GNIB_NUMBER: 340,
    FT_DEPT_NUMBER: 341,
    FT_TELEX_CODE: 342,
    FT_ALLERGIES: 343,
    FT_SP_CODE: 344,
    FT_COURT_CODE: 345,
    FT_CTY: 346,
    FT_SPONSOR_SSN: 347,
    FT_DO_D_NUMBER: 348,
    FT_MC_NOVICE_DATE: 349,
    FT_DUF_NUMBER: 350,
    FT_AGY: 351,
    FT_PNR_CODE: 352,
    FT_FROM_AIRPORT_CODE: 353,
    FT_TO_AIRPORT_CODE: 354,
    FT_FLIGHT_NUMBER: 355,
    FT_DATE_OF_FLIGHT: 356,
    FT_SEAT_NUMBER: 357,
    FT_DATE_OF_ISSUE_BOARDING_PASS: 358,
    FT_CCW_UNTIL: 359,
    FT_REFERENCE_NUMBER_CHECKSUM: 360,
    FT_REFERENCE_NUMBER_CHECK_DIGIT: 361,
    FT_ROOM_NUMBER: 362,
    FT_RELIGION: 363,
    FT_REMAINDER_TERM: 364,
    FT_ELECTRONIC_TICKET_INDICATOR: 365,
    FT_COMPARTMENT_CODE: 366,
    FT_CHECK_IN_SEQUENCE_NUMBER: 367,
    FT_AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER: 368,
    FT_AIRLINE_NUMERIC_CODE: 369,
    FT_TICKET_NUMBER: 370,
    FT_FREQUENT_FLYER_AIRLINE_DESIGNATOR: 371,
    FT_FREQUENT_FLYER_NUMBER: 372,
    FT_FREE_BAGGAGE_ALLOWANCE: 373,
    FT_PDF_417_CODEC: 374,
    FT_IDENTITY_CARD_NUMBER_CHECKSUM: 375,
    FT_IDENTITY_CARD_NUMBER_CHECK_DIGIT: 376,
    FT_VETERAN: 377,
    FT_DL_CLASS_CODE_A_1_FROM: 378,
    FT_DL_CLASS_CODE_A_1_TO: 379,
    FT_DL_CLASS_CODE_A_1_NOTES: 380,
    FT_DL_CLASS_CODE_A_FROM: 381,
    FT_DL_CLASS_CODE_A_TO: 382,
    FT_DL_CLASS_CODE_A_NOTES: 383,
    FT_DL_CLASS_CODE_B_FROM: 384,
    FT_DL_CLASS_CODE_B_TO: 385,
    FT_DL_CLASS_CODE_B_NOTES: 386,
    FT_DL_CLASS_CODE_C_1_FROM: 387,
    FT_DL_CLASS_CODE_C_1_TO: 388,
    FT_DL_CLASS_CODE_C_1_NOTES: 389,
    FT_DL_CLASS_CODE_C_FROM: 390,
    FT_DL_CLASS_CODE_C_TO: 391,
    FT_DL_CLASS_CODE_C_NOTES: 392,
    FT_DL_CLASS_CODE_D_1_FROM: 393,
    FT_DL_CLASS_CODE_D_1_TO: 394,
    FT_DL_CLASS_CODE_D_1_NOTES: 395,
    FT_DL_CLASS_CODE_D_FROM: 396,
    FT_DL_CLASS_CODE_D_TO: 397,
    FT_DL_CLASS_CODE_D_NOTES: 398,
    FT_DL_CLASS_CODE_BE_FROM: 399,
    FT_DL_CLASS_CODE_BE_TO: 400,
    FT_DL_CLASS_CODE_BE_NOTES: 401,
    FT_DL_CLASS_CODE_C_1_E_FROM: 402,
    FT_DL_CLASS_CODE_C_1_E_TO: 403,
    FT_DL_CLASS_CODE_C_1_E_NOTES: 404,
    FT_DL_CLASS_CODE_CE_FROM: 405,
    FT_DL_CLASS_CODE_CE_TO: 406,
    FT_DL_CLASS_CODE_CE_NOTES: 407,
    FT_DL_CLASS_CODE_D_1_E_FROM: 408,
    FT_DL_CLASS_CODE_D_1_E_TO: 409,
    FT_DL_CLASS_CODE_D_1_E_NOTES: 410,
    FT_DL_CLASS_CODE_DE_FROM: 411,
    FT_DL_CLASS_CODE_DE_TO: 412,
    FT_DL_CLASS_CODE_DE_NOTES: 413,
    FT_DL_CLASS_CODE_M_FROM: 414,
    FT_DL_CLASS_CODE_M_TO: 415,
    FT_DL_CLASS_CODE_M_NOTES: 416,
    FT_DL_CLASS_CODE_L_FROM: 417,
    FT_DL_CLASS_CODE_L_TO: 418,
    FT_DL_CLASS_CODE_L_NOTES: 419,
    FT_DL_CLASS_CODE_T_FROM: 420,
    FT_DL_CLASS_CODE_T_TO: 421,
    FT_DL_CLASS_CODE_T_NOTES: 422,
    FT_DL_CLASS_CODE_AM_FROM: 423,
    FT_DL_CLASS_CODE_AM_TO: 424,
    FT_DL_CLASS_CODE_AM_NOTES: 425,
    FT_DL_CLASS_CODE_A_2_FROM: 426,
    FT_DL_CLASS_CODE_A_2_TO: 427,
    FT_DL_CLASS_CODE_A_2_NOTES: 428,
    FT_DL_CLASS_CODE_B_1_FROM: 429,
    FT_DL_CLASS_CODE_B_1_TO: 430,
    FT_DL_CLASS_CODE_B_1_NOTES: 431,
    FT_SURNAME_AT_BIRTH: 432,
    FT_CIVIL_STATUS: 433,
    FT_NUMBER_OF_SEATS: 434,
    FT_NUMBER_OF_STANDING_PLACES: 435,
    FT_MAX_SPEED: 436,
    FT_FUEL_TYPE: 437,
    FT_EC_ENVIRONMENTAL_TYPE: 438,
    FT_POWER_WEIGHT_RATIO: 439,
    FT_MAX_MASS_OF_TRAILER_BRAKED: 440,
    FT_MAX_MASS_OF_TRAILER_UNBRAKED: 441,
    FT_TRANSMISSION_TYPE: 442,
    FT_TRAILER_HITCH: 443,
    FT_ACCOMPANIED_BY: 444,
    FT_POLICE_DISTRICT: 445,
    FT_FIRST_ISSUE_DATE: 446,
    FT_PAYLOAD_CAPACITY: 447,
    FT_NUMBER_OF_AXELS: 448,
    FT_PERMISSIBLE_AXLE_LOAD: 449,
    FT_PRECINCT: 450,
    FT_INVITED_BY: 451,
    FT_PURPOSE_OF_ENTRY: 452,
    FT_SKIN_COLOR: 453,
    FT_COMPLEXION: 454,
    FT_AIRPORT_FROM: 455,
    FT_AIRPORT_TO: 456,
    FT_AIRLINE_NAME: 457,
    FT_AIRLINE_NAME_FREQUENT_FLYER: 458,
    FT_LICENSE_NUMBER: 459,
    FT_IN_TANKS: 460,
    FT_EXEPT_IN_TANKS: 461,
    FT_FAST_TRACK: 462,
    FT_OWNER: 463,
    FT_MRZ_STRINGS_ICAO_RFID: 464,
    FT_NUMBER_OF_CARD_ISSUANCE: 465,
    FT_NUMBER_OF_CARD_ISSUANCE_CHECKSUM: 466,
    FT_NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT: 467,
    FT_CENTURY_DATE_OF_BIRTH: 468,
    FT_DL_CLASSCODE_A3_FROM: 469,
    FT_DL_CLASSCODE_A3_TO: 470,
    FT_DL_CLASSCODE_A3_NOTES: 471,
    FT_DL_CLASSCODE_C2_FROM: 472,
    FT_DL_CLASSCODE_C2_TO: 473,
    FT_DL_CLASSCODE_C2_NOTES: 474,
    FT_DL_CLASSCODE_B2_FROM: 475,
    FT_DL_CLASSCODE_B2_TO: 476,
    FT_DL_CLASSCODE_B2_NOTES: 477,
    FT_DL_CLASSCODE_D2_FROM: 478,
    FT_DL_CLASSCODE_D2_TO: 479,
    FT_DL_CLASSCODE_D2_NOTES: 480,
    FT_DL_CLASSCODE_B2E_FROM: 481,
    FT_DL_CLASSCODE_B2E_TO: 482,
    FT_DL_CLASSCODE_B2E_NOTES: 483,
    FT_DL_CLASSCODE_G_FROM: 484,
    FT_DL_CLASSCODE_G_TO: 485,
    FT_DL_CLASSCODE_G_NOTES: 486,
    FT_DL_CLASSCODE_J_FROM: 487,
    FT_DL_CLASSCODE_J_TO: 488,
    FT_DL_CLASSCODE_J_NOTES: 489,
    FT_DL_CLASSCODE_LC_FROM: 490,
    FT_DL_CLASSCODE_LC_TO: 491,
    FT_DLC_LASSCODE_LC_NOTES: 492,
    FT_BANKCARDNUMBER: 493,
    FT_BANKCARDVALIDTHRU: 494,
    FT_TAX_NUMBER: 495,
    FT_HEALTH_NUMBER: 496,
    FT_GRANDFATHERNAME: 497,
    FT_SELECTEE_INDICATOR: 498,
    FT_MOTHER_SURNAME: 499,
    FT_MOTHER_GIVENNAME: 500,
    FT_FATHER_SURNAME: 501,
    FT_FATHER_GIVENNAME: 502,
    FT_MOTHER_DATEOFBIRTH: 503,
    FT_FATHER_DATEOFBIRTH: 504,
    FT_MOTHER_PERSONALNUMBER: 505,
    FT_FATHER_PERSONALNUMBER: 506,
    FT_MOTHER_PLACEOFBIRTH: 507,
    FT_FATHER_PLACEOFBIRTH: 508,
    FT_MOTHER_COUNTRYOFBIRTH: 509,
    FT_FATHER_COUNTRYOFBIRTH: 510,
    FT_DATE_FIRST_RENEWAL: 511,
    FT_DATE_SECOND_RENEWAL: 512,
    FT_PLACE_OF_EXAMINATION: 513,
    FT_APPLICATION_NUMBER: 514,
    FT_VOUCHER_NUMBER: 515,
    FT_AUTHORIZATION_NUMBER: 516,
    FT_FACULTY: 517,
    FT_FORM_OF_EDUCATION: 518,
    FT_DNI_NUMBER: 519,
    FT_RETIREMENT_NUMBER: 520,
    FT_PROFESSIONAL_ID_NUMBER: 521,
    FT_AGE_AT_ISSUE: 522,
    FT_YEARS_SINCE_ISSUE: 523,
    FT_DLCLASSCODE_BTP_FROM: 524,
    FT_DLCLASSCODE_BTP_NOTES: 525,
    FT_DLCLASSCODE_BTP_TO: 526,
    FT_DLCLASSCODE_C3_FROM: 527,
    FT_DLCLASSCODE_C3_NOTES: 528,
    FT_DLCLASSCODE_C3_TO: 529,
    FT_DLCLASSCODE_E_FROM: 530,
    FT_DLCLASSCODE_E_NOTES: 531,
    FT_DLCLASSCODE_E_TO: 532,
    FT_DLCLASSCODE_F_FROM: 533,
    FT_DLCLASSCODE_F_NOTES: 534,
    FT_DLCLASSCODE_F_TO: 535,
    FT_DLCLASSCODE_FA_FROM: 536,
    FT_DLCLASSCODE_FA_NOTES: 537,
    FT_DLCLASSCODE_FA_TO: 538,
    FT_DLCLASSCODE_FA1_FROM: 539,
    FT_DLCLASSCODE_FA1_NOTES: 540,
    FT_DLCLASSCODE_FA1_TO: 541,
    FT_DLCLASSCODE_FB_FROM: 542,
    FT_DLCLASSCODE_FB_NOTES: 543,
    FT_DLCLASSCODE_FB_TO: 544,
    FT_DLCLASSCODE_G1_FROM: 545,
    FT_DLCLASSCODE_G1_NOTES: 546,
    FT_DLCLASSCODE_G1_TO: 547,
    FT_DLCLASSCODE_H_FROM: 548,
    FT_DLCLASSCODE_H_NOTES: 549,
    FT_DLCLASSCODE_H_TO: 550,
    FT_DLCLASSCODE_I_FROM: 551,
    FT_DLCLASSCODE_I_NOTES: 552,
    FT_DLCLASSCODE_I_TO: 553,
    FT_DLCLASSCODE_K_FROM: 554,
    FT_DLCLASSCODE_K_NOTES: 555,
    FT_DLCLASSCODE_K_TO: 556,
    FT_DLCLASSCODE_LK_FROM: 557,
    FT_DLCLASSCODE_LK_NOTES: 558,
    FT_DLCLASSCODE_LK_TO: 559,
    FT_DLCLASSCODE_N_FROM: 560,
    FT_DLCLASSCODE_N_NOTES: 561,
    FT_DLCLASSCODE_N_TO: 562,
    FT_DLCLASSCODE_S_FROM: 563,
    FT_DLCLASSCODE_S_NOTES: 564,
    FT_DLCLASSCODE_S_TO: 565,
    FT_DLCLASSCODE_TB_FROM: 566,
    FT_DLCLASSCODE_TB_NOTES: 567,
    FT_DLCLASSCODE_TB_TO: 568,
    FT_DLCLASSCODE_TM_FROM: 569,
    FT_DLCLASSCODE_TM_NOTES: 570,
    FT_DLCLASSCODE_TM_TO: 571,
    FT_DLCLASSCODE_TR_FROM: 572,
    FT_DLCLASSCODE_TR_NOTES: 573,
    FT_DLCLASSCODE_TR_TO: 574,
    FT_DLCLASSCODE_TV_FROM: 575,
    FT_DLCLASSCODE_TV_NOTES: 576,
    FT_DLCLASSCODE_TV_TO: 577,
    FT_DLCLASSCODE_V_FROM: 578,
    FT_DLCLASSCODE_V_NOTES: 579,
    FT_DLCLASSCODE_V_TO: 580,
    FT_DLCLASSCODE_W_FROM: 581,
    FT_DLCLASSCODE_W_NOTES: 582,
    FT_DLCLASSCODE_W_TO: 583,
    FT_URL: 584,
    FT_CALIBER: 585,
    FT_MODEL: 586,
    FT_MAKE: 587,
    FT_NUMBER_OF_CYLINDERS: 588,
    FT_SURNAME_OF_HUSBAND_AFTER_REGISTRATION: 589,
    FT_SURNAME_OF_WIFE_AFTER_REGISTRATION: 590,
    FT_DATE_OF_BIRTH_OF_WIFE: 591,
    FT_DATE_OF_BIRTH_OF_HUSBAND: 592,
    FT_CITIZENSHIP_OF_FIRST_PERSON: 593,
    FT_CITIZENSHIP_OF_SECOND_PERSON: 594,
    FT_CVV: 595,
    FT_DATE_OF_INSURANCE_EXPIRY: 596,
    FT_MORTGAGE_BY: 597,
    FT_OLD_DOCUMENT_NUMBER: 598,
    FT_OLD_DATE_OF_ISSUE: 599,
    FT_OLD_PLACE_OF_ISSUE: 600,
    FT_DLCLASSCODE_LR_FROM: 601,
    FT_DLCLASSCODE_LR_TO: 602,
    FT_DLCLASSCODE_LR_NOTES: 603,
    FT_DLCLASSCODE_MR_FROM: 604,
    FT_DLCLASSCODE_MR_TO: 605,
    FT_DLCLASSCODE_MR_NOTES: 606,
    FT_DLCLASSCODE_HR_FROM: 607,
    FT_DLCLASSCODE_HR_TO: 608,
    FT_DLCLASSCODE_HR_NOTES: 609,
    FT_DLCLASSCODE_HC_FROM: 610,
    FT_DLCLASSCODE_HC_TO: 611,
    FT_DLCLASSCODE_HC_NOTES: 612,
    FT_DLCLASSCODE_MC_FROM: 613,
    FT_DLCLASSCODE_MC_TO: 614,
    FT_DLCLASSCODE_MC_NOTES: 615,
    FT_DLCLASSCODE_RE_FROM: 616,
    FT_DLCLASSCODE_RE_TO: 617,
    FT_DLCLASSCODE_RE_NOTES: 618,
    FT_DLCLASSCODE_R_FROM: 619,
    FT_DLCLASSCODE_R_TO: 620,
    FT_DLCLASSCODE_R_NOTES: 621,
    FT_DLCLASSCODE_CA_FROM: 622,
    FT_DLCLASSCODE_CA_TO: 623,
    FT_DLCLASSCODE_CA_NOTES: 624,
    getTranslation: function (value) {
        switch (value) {
            case this.FT_DOCUMENT_CLASS_CODE:
                return "Document class code";
            case this.FT_ISSUING_STATE_CODE:
                return "Issuing state code";
            case this.FT_DOCUMENT_NUMBER:
                return "Document number";
            case this.FT_DATE_OF_EXPIRY:
                return "Date of expiry";
            case this.FT_DATE_OF_ISSUE:
                return "Date of issue";
            case this.FT_DATE_OF_BIRTH:
                return "Date of birth";
            case this.FT_PLACE_OF_BIRTH:
                return "Place of birth";
            case this.FT_PERSONAL_NUMBER:
                return "Personal number";
            case this.FT_SURNAME:
                return "Surname";
            case this.FT_GIVEN_NAMES:
                return "Given name";
            case this.FT_MOTHERS_NAME:
                return "Mother\'s name";
            case this.FT_NATIONALITY:
                return "Nationality";
            case this.FT_SEX:
                return "Sex";
            case this.FT_HEIGHT:
                return "Height";
            case this.FT_WEIGHT:
                return "Weight";
            case this.FT_EYES_COLOR:
                return "Eye color";
            case this.FT_HAIR_COLOR:
                return "Hair color";
            case this.FT_ADDRESS:
                return "Address";
            case this.FT_DONOR:
                return "Donor";
            case this.FT_SOCIAL_SECURITY_NUMBER:
                return "Social insurance number";
            case this.FT_DL_CLASS:
                return "DL category";
            case this.FT_DL_ENDORSED:
                return "DL endorsement code";
            case this.FT_DL_RESTRICTION_CODE:
                return "DL Restriction Code";
            case this.FT_DL_UNDER_21_DATE:
                return "Date of 21st birthday";
            case this.FT_AUTHORITY:
                return "Issuing authority";
            case this.FT_SURNAME_AND_GIVEN_NAMES:
                return "Surname and given names";
            case this.FT_NATIONALITY_CODE:
                return "Nationality code";
            case this.FT_PASSPORT_NUMBER:
                return "Passport number";
            case this.FT_INVITATION_NUMBER:
                return "Invitation number";
            case this.FT_VISA_ID:
                return "Visa ID";
            case this.FT_VISA_CLASS:
                return "Visa Class";
            case this.FT_VISA_SUB_CLASS:
                return "Visa subclass";
            case this.FT_MRZ_STRING_1:
                return "MRZ line 1";
            case this.FT_MRZ_STRING_2:
                return "MRZ line 2";
            case this.FT_MRZ_STRING_3:
                return "MRZ line 3";
            case this.FT_MRZ_TYPE:
                return "MRZ Type";
            case this.FT_OPTIONAL_DATA:
                return "Optional data";
            case this.FT_DOCUMENT_CLASS_NAME:
                return "Document class";
            case this.FT_ISSUING_STATE_NAME:
                return "Issuing state";
            case this.FT_PLACE_OF_ISSUE:
                return "Place of issue";
            case this.FT_DOCUMENT_NUMBER_CHECKSUM:
                return "Checksum for document number";
            case this.FT_DATE_OF_BIRTH_CHECKSUM:
                return "Checksum for date of birth";
            case this.FT_DATE_OF_EXPIRY_CHECKSUM:
                return "Checksum for date of expiry";
            case this.FT_PERSONAL_NUMBER_CHECKSUM:
                return "Checksum for personal number";
            case this.FT_FINAL_CHECKSUM:
                return "Final checksum";
            case this.FT_PASSPORT_NUMBER_CHECKSUM:
                return "Checksum for passport number";
            case this.FT_INVITATION_NUMBER_CHECKSUM:
                return "Checksum for invitation number";
            case this.FT_VISA_ID_CHECKSUM:
                return "Checksum for visa ID";
            case this.FT_SURNAME_AND_GIVEN_NAMES_CHECKSUM:
                return "Checksum for surname and given names";
            case this.FT_VISA_VALID_UNTIL_CHECKSUM:
                return "Checksum for visa expiry date";
            case this.FT_OTHER:
                return "Other";
            case this.FT_MRZ_STRINGS:
                return "MRZ lines";
            case this.FT_NAME_SUFFIX:
                return "Name suffix";
            case this.FT_NAME_PREFIX:
                return "Name prefix";
            case this.FT_DATE_OF_ISSUE_CHECKSUM:
                return "Checksum for date of issue";
            case this.FT_DATE_OF_ISSUE_CHECK_DIGIT:
                return "Check digit for date of issue";
            case this.FT_DOCUMENT_SERIES:
                return "Document series";
            case this.FT_REG_CERT_REG_NUMBER:
                return "Registration number";
            case this.FT_REG_CERT_CAR_MODEL:
                return "Vehicle model";
            case this.FT_REG_CERT_CAR_COLOR:
                return "Vehicle color";
            case this.FT_REG_CERT_BODY_NUMBER:
                return "Body number";
            case this.FT_REG_CERT_CAR_TYPE:
                return "Vehicle type";
            case this.FT_REG_CERT_MAX_WEIGHT:
                return "Max permissible weight";
            case this.FT_REG_CERT_WEIGHT:
                return "Unladen mass";
            case this.FT_ADDRESS_AREA:
                return "Area";
            case this.FT_ADDRESS_STATE:
                return "State";
            case this.FT_ADDRESS_BUILDING:
                return "Unit";
            case this.FT_ADDRESS_HOUSE:
                return "Building";
            case this.FT_ADDRESS_FLAT:
                return "Apartment";
            case this.FT_PLACE_OF_REGISTRATION:
                return "Place of registration";
            case this.FT_DATE_OF_REGISTRATION:
                return "Date of registration";
            case this.FT_RESIDENT_FROM:
                return "Resident from";
            case this.FT_RESIDENT_UNTIL:
                return "Resident until";
            case this.FT_AUTHORITY_CODE:
                return "Issuing authority code";
            case this.FT_PLACE_OF_BIRTH_AREA:
                return "Area of birthplace";
            case this.FT_PLACE_OF_BIRTH_STATE_CODE:
                return "State code of birthplace";
            case this.FT_ADDRESS_STREET:
                return "Street";
            case this.FT_ADDRESS_CITY:
                return "City";
            case this.FT_ADDRESS_JURISDICTION_CODE:
                return "Jurisdiction code";
            case this.FT_ADDRESS_POSTAL_CODE:
                return "Postal code";
            case this.FT_DOCUMENT_NUMBER_CHECK_DIGIT:
                return "Check digit for document number";
            case this.FT_DATE_OF_BIRTH_CHECK_DIGIT:
                return "Check digit for date of birth";
            case this.FT_DATE_OF_EXPIRY_CHECK_DIGIT:
                return "Check digit for date of expiry";
            case this.FT_PERSONAL_NUMBER_CHECK_DIGIT:
                return "Check digit for personal number";
            case this.FT_FINAL_CHECK_DIGIT:
                return "Final check digit";
            case this.FT_PASSPORT_NUMBER_CHECK_DIGIT:
                return "Check digit for passport number";
            case this.FT_INVITATION_NUMBER_CHECK_DIGIT:
                return "Check digit for invitation number";
            case this.FT_VISA_ID_CHECK_DIGIT:
                return "Check digit for visa ID";
            case this.FT_SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT:
                return "Check digit for surname and given names";
            case this.FT_VISA_VALID_UNTIL_CHECK_DIGIT:
                return "Check digit for visa expiry date";
            case this.FT_PERMIT_DL_CLASS:
                return "Permit class";
            case this.FT_PERMIT_DATE_OF_EXPIRY:
                return "Permit expiry date";
            case this.FT_PERMIT_IDENTIFIER:
                return "Permit identifier";
            case this.FT_PERMIT_DATE_OF_ISSUE:
                return "Permit issue date";
            case this.FT_PERMIT_RESTRICTION_CODE:
                return "Permit restriction code";
            case this.FT_PERMIT_ENDORSED:
                return "Permit endorsement code";
            case this.FT_ISSUE_TIMESTAMP:
                return "Issue time";
            case this.FT_NUMBER_OF_DUPLICATES:
                return "Number of duplicates";
            case this.FT_MEDICAL_INDICATOR_CODES:
                return "Medical notes/codes";
            case this.FT_NON_RESIDENT_INDICATOR:
                return "Non-resident indicator";
            case this.FT_VISA_TYPE:
                return "Visa type";
            case this.FT_VISA_VALID_FROM:
                return "Visa valid from";
            case this.FT_VISA_VALID_UNTIL:
                return "Visa valid until";
            case this.FT_DURATION_OF_STAY:
                return "Duration of stay";
            case this.FT_NUMBER_OF_ENTRIES:
                return "Number of entries";
            case this.FT_DAY:
                return "Day";
            case this.FT_MONTH:
                return "Month";
            case this.FT_YEAR:
                return "Year";
            case this.FT_UNIQUE_CUSTOMER_IDENTIFIER:
                return "Unique customer identifier";
            case this.FT_COMMERCIAL_VEHICLE_CODES:
                return "Commercial vehicle code";
            case this.FT_AKA_DATE_OF_BIRTH:
                return "AKA Date of birth";
            case this.FT_AKA_SOCIAL_SECURITY_NUMBER:
                return "AKA Social Insurance Number";
            case this.FT_AKA_SURNAME:
                return "AKA Surname";
            case this.FT_AKA_GIVEN_NAMES:
                return "AKA Given name";
            case this.FT_AKA_NAME_SUFFIX:
                return "AKA Name suffix";
            case this.FT_AKA_NAME_PREFIX:
                return "AKA Name prefix";
            case this.FT_MAILING_ADDRESS_STREET:
                return "Mailing address - street";
            case this.FT_MAILING_ADDRESS_CITY:
                return "Mailing address - city";
            case this.FT_MAILING_ADDRESS_JURISDICTION_CODE:
                return "Mailing address - jurisdiction code";
            case this.FT_MAILING_ADDRESS_POSTAL_CODE:
                return "Mailing address - postal code";
            case this.FT_AUDIT_INFORMATION:
                return "Number for validation";
            case this.FT_INVENTORY_NUMBER:
                return "Inventory number";
            case this.FT_RACE_ETHNICITY:
                return "Race/ethnicity";
            case this.FT_JURISDICTION_VEHICLE_CLASS:
                return "Jurisdiction vehicle class";
            case this.FT_JURISDICTION_ENDORSEMENT_CODE:
                return "Jurisdiction endorsement code";
            case this.FT_JURISDICTION_RESTRICTION_CODE:
                return "Jurisdiction restriction code";
            case this.FT_FAMILY_NAME:
                return "Surname/given name at birth";
            case this.FT_GIVEN_NAMES_RUS:
                return "Given name (National)";
            case this.FT_VISA_ID_RUS:
                return "Visa ID (National)";
            case this.FT_FATHERS_NAME:
                return "Father\'s name";
            case this.FT_FATHERS_NAME_RUS:
                return "Father\'s name (National)";
            case this.FT_SURNAME_AND_GIVEN_NAMES_RUS:
                return "Surname and given names (National)";
            case this.FT_PLACE_OF_BIRTH_RUS:
                return "Place of birth (National)";
            case this.FT_AUTHORITY_RUS:
                return "Issuing authority (National)";
            case this.FT_ISSUING_STATE_CODE_NUMERIC:
                return "Numeric issuing state code";
            case this.FT_NATIONALITY_CODE_NUMERIC:
                return "Numeric nationality code";
            case this.FT_ENGINE_POWER:
                return "Engine power";
            case this.FT_ENGINE_VOLUME:
                return "Engine volume";
            case this.FT_CHASSIS_NUMBER:
                return "Chassis number";
            case this.FT_ENGINE_NUMBER:
                return "Engine number";
            case this.FT_ENGINE_MODEL:
                return "Engine model";
            case this.FT_VEHICLE_CATEGORY:
                return "Vehicle category";
            case this.FT_IDENTITY_CARD_NUMBER:
                return "Identity card number";
            case this.FT_CONTROL_NO:
                return "Control number";
            case this.FT_PARRENTS_GIVEN_NAMES:
                return "Parents\' given names";
            case this.FT_SECOND_SURNAME:
                return "Second surname";
            case this.FT_MIDDLE_NAME:
                return "Middle name";
            case this.FT_REG_CERT_VIN:
                return "Vehicle identification number";
            case this.FT_REG_CERT_VIN_CHECK_DIGIT:
                return "Check digit for VIN";
            case this.FT_REG_CERT_VIN_CHECKSUM:
                return "Checksum for VIN";
            case this.FT_LINE_1_CHECK_DIGIT:
                return "Check digit for line 1";
            case this.FT_LINE_2_CHECK_DIGIT:
                return "Check digit for line 2";
            case this.FT_LINE_3_CHECK_DIGIT:
                return "Check digit for line 3";
            case this.FT_LINE_1_CHECKSUM:
                return "Checksum for line 1";
            case this.FT_LINE_2_CHECKSUM:
                return "Checksum for line 2";
            case this.FT_LINE_3_CHECKSUM:
                return "Checksum for line 3";
            case this.FT_REG_CERT_REG_NUMBER_CHECK_DIGIT:
                return "Check digit for registration number";
            case this.FT_REG_CERT_REG_NUMBER_CHECKSUM:
                return "Checksum for registration number";
            case this.FT_REG_CERT_VEHICLE_ITS_CODE:
                return "Vehicle ITS code";
            case this.FT_CARD_ACCESS_NUMBER:
                return "Card access number";
            case this.FT_MARITAL_STATUS:
                return "Marital status";
            case this.FT_COMPANY_NAME:
                return "Company name";
            case this.FT_SPECIAL_NOTES:
                return "Special notes";
            case this.FT_SURNAME_OF_SPOSE:
                return "Spouse\'s surname";
            case this.FT_TRACKING_NUMBER:
                return "Tracking number";
            case this.FT_BOOKLET_NUMBER:
                return "Booklet number";
            case this.FT_CHILDREN:
                return "Children";
            case this.FT_COPY:
                return "Copy";
            case this.FT_SERIAL_NUMBER:
                return "Serial number";
            case this.FT_DOSSIER_NUMBER:
                return "Dossier number";
            case this.FT_AKA_SURNAME_AND_GIVEN_NAMES:
                return "AKA Full name";
            case this.FT_TERRITORIAL_VALIDITY:
                return "Territorial validity";
            case this.FT_MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS:
                return "MRZ lines with correct checksums";
            case this.FT_DL_CDL_RESTRICTION_CODE:
                return "CDL Restriction Code";
            case this.FT_DL_UNDER_18_DATE:
                return "Date of 18th birthday";
            case this.FT_DL_RECORD_CREATED:
                return "Record created";
            case this.FT_DL_DUPLICATE_DATE:
                return "Date of duplicate issue";
            case this.FT_DL_ISS_TYPE:
                return "Card type";
            case this.FT_MILITARY_BOOK_NUMBER:
                return "Military ID number";
            case this.FT_DESTINATION:
                return "Destination";
            case this.FT_BLOOD_GROUP:
                return "Blood group";
            case this.FT_SEQUENCE_NUMBER:
                return "Sequence number";
            case this.FT_REG_CERT_BODY_TYPE:
                return "Body type";
            case this.FT_REG_CERT_CAR_MARK:
                return "Vehicle make";
            case this.FT_TRANSACTION_NUMBER:
                return "Transaction number";
            case this.FT_AGE:
                return "Age";
            case this.FT_FOLIO_NUMBER:
                return "Folio number";
            case this.FT_VOTER_KEY:
                return "Voter Key";
            case this.FT_ADDRESS_MUNICIPALITY:
                return "Municipality";
            case this.FT_ADDRESS_LOCATION:
                return "Location";
            case this.FT_SECTION:
                return "Section";
            case this.FT_OCR_NUMBER:
                return "OCR number";
            case this.FT_FEDERAL_ELECTIONS:
                return "Federal elections";
            case this.FT_REFERENCE_NUMBER:
                return "Unique number";
            case this.FT_OPTIONAL_DATA_CHECKSUM:
                return "Checksum for optional data";
            case this.FT_OPTIONAL_DATA_CHECK_DIGIT:
                return "Check digit for optional data";
            case this.FT_VISA_NUMBER:
                return "Visa Number";
            case this.FT_VISA_NUMBER_CHECKSUM:
                return "Checksum for visa number";
            case this.FT_VISA_NUMBER_CHECK_DIGIT:
                return "Check digit for visa number";
            case this.FT_VOTER:
                return "Voter";
            case this.FT_PREVIOUS_TYPE:
                return "Type/number of the previous document";
            case this.FT_FIELD_FROM_MRZ:
                return "Field from MRZ";
            case this.FT_CURRENT_DATE:
                return "Current date";
            case this.FT_STATUS_DATE_OF_EXPIRY:
                return "Status Expiry Date";
            case this.FT_BANKNOTE_NUMBER:
                return "Banknote number";
            case this.FT_CSC_CODE:
                return "CSC Code";
            case this.FT_ARTISTIC_NAME:
                return "Pseudonym";
            case this.FT_ACADEMIC_TITLE:
                return "Academic title";
            case this.FT_ADDRESS_COUNTRY:
                return "Country";
            case this.FT_ADDRESS_ZIPCODE:
                return "ZIP code";
            case this.FT_E_ID_RESIDENCE_PERMIT_1:
                return "Residence permit 1";
            case this.FT_E_ID_RESIDENCE_PERMIT_2:
                return "Residence permit 2";
            case this.FT_E_ID_PLACE_OF_BIRTH_STREET:
                return "Place of Birth: Street";
            case this.FT_E_ID_PLACE_OF_BIRTH_CITY:
                return "Place of Birth: City";
            case this.FT_E_ID_PLACE_OF_BIRTH_STATE:
                return "Place of Birth: State";
            case this.FT_E_ID_PLACE_OF_BIRTH_COUNTRY:
                return "Place of Birth: Country";
            case this.FT_E_ID_PLACE_OF_BIRTH_ZIPCODE:
                return "Place of Birth: Postal code";
            case this.FT_CDL_CLASS:
                return "CDL Class";
            case this.FT_DL_UNDER_19_DATE:
                return "Date of 19th birthday";
            case this.FT_WEIGHT_POUNDS:
                return "Weight (pound)";
            case this.FT_LIMITED_DURATION_DOCUMENT_INDICATOR:
                return "Indicator of document limited duration";
            case this.FT_ENDORSEMENT_EXPIRATION_DATE:
                return "Endorsement expiration date";
            case this.FT_REVISION_DATE:
                return "Revision date";
            case this.FT_COMPLIANCE_TYPE:
                return "Compliance type";
            case this.FT_FAMILY_NAME_TRUNCATION:
                return "Truncated surname/given name at birth";
            case this.FT_FIRST_NAME_TRUNCATION:
                return "First name truncation";
            case this.FT_MIDDLE_NAME_TRUNCATION:
                return "Middle name truncation";
            case this.FT_EXAM_DATE:
                return "Exam date";
            case this.FT_ORGANIZATION:
                return "Organization";
            case this.FT_DEPARTMENT:
                return "Department";
            case this.FT_PAY_GRADE:
                return "Pay grade";
            case this.FT_RANK:
                return "Rank";
            case this.FT_BENEFITS_NUMBER:
                return "Benefits number";
            case this.FT_SPONSOR_SERVICE:
                return "Sponsor service";
            case this.FT_SPONSOR_STATUS:
                return "Sponsor status";
            case this.FT_SPONSOR:
                return "Sponsor";
            case this.FT_RELATIONSHIP:
                return "Relationship";
            case this.FT_USCIS:
                return "USCIS";
            case this.FT_CATEGORY:
                return "Category";
            case this.FT_CONDITIONS:
                return "Conditions";
            case this.FT_IDENTIFIER:
                return "Identifier";
            case this.FT_CONFIGURATION:
                return "Configuration";
            case this.FT_DISCRETIONARY_DATA:
                return "Discretionary data";
            case this.FT_LINE_1_OPTIONAL_DATA:
                return "Optional data from line 1";
            case this.FT_LINE_2_OPTIONAL_DATA:
                return "Optional data from line 2";
            case this.FT_LINE_3_OPTIONAL_DATA:
                return "Optional data from line 3";
            case this.FT_EQV_CODE:
                return "EQV code";
            case this.FT_ALT_CODE:
                return "ALT code";
            case this.FT_BINARY_CODE:
                return "Binary code";
            case this.FT_PSEUDO_CODE:
                return "Pseudocode";
            case this.FT_FEE:
                return "Fee";
            case this.FT_STAMP_NUMBER:
                return "Stamp number";
            case this.FT_GNIB_NUMBER:
                return "GNIB number";
            case this.FT_DEPT_NUMBER:
                return "Department number";
            case this.FT_TELEX_CODE:
                return "Telegraph code";
            case this.FT_ALLERGIES:
                return "Allergies";
            case this.FT_SP_CODE:
                return "Special code";
            case this.FT_COURT_CODE:
                return "Court code";
            case this.FT_CTY:
                return "County";
            case this.FT_SPONSOR_SSN:
                return "Sponsor SSN";
            case this.FT_DO_D_NUMBER:
                return "DoD number";
            case this.FT_MC_NOVICE_DATE:
                return "Expiry date of Motorcycle Novice status";
            case this.FT_DUF_NUMBER:
                return "DUF number";
            case this.FT_AGY:
                return "AGY";
            case this.FT_PNR_CODE:
                return "PNR code";
            case this.FT_FROM_AIRPORT_CODE:
                return "Code of the airport of departure";
            case this.FT_TO_AIRPORT_CODE:
                return "Code of the airport of arrival";
            case this.FT_FLIGHT_NUMBER:
                return "Flight number";
            case this.FT_DATE_OF_FLIGHT:
                return "Date of flight";
            case this.FT_SEAT_NUMBER:
                return "Seat number";
            case this.FT_DATE_OF_ISSUE_BOARDING_PASS:
                return "Date of boarding pass issue";
            case this.FT_CCW_UNTIL:
                return "CCW until";
            case this.FT_REFERENCE_NUMBER_CHECKSUM:
                return "Unique number checksum";
            case this.FT_REFERENCE_NUMBER_CHECK_DIGIT:
                return "Unique number check digit";
            case this.FT_ROOM_NUMBER:
                return "Room number";
            case this.FT_RELIGION:
                return "Religion";
            case this.FT_REMAINDER_TERM:
                return "Months to expire";
            case this.FT_ELECTRONIC_TICKET_INDICATOR:
                return "Electronic ticket indicator";
            case this.FT_COMPARTMENT_CODE:
                return "Compartment code";
            case this.FT_CHECK_IN_SEQUENCE_NUMBER:
                return "Check-in sequence number";
            case this.FT_AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER:
                return "Airline designator of boarding pass issuer";
            case this.FT_AIRLINE_NUMERIC_CODE:
                return "Airline numeric code";
            case this.FT_TICKET_NUMBER:
                return "Ticket number";
            case this.FT_FREQUENT_FLYER_AIRLINE_DESIGNATOR:
                return "Frequent flyer airline designator";
            case this.FT_FREQUENT_FLYER_NUMBER:
                return "Frequent flyer number";
            case this.FT_FREE_BAGGAGE_ALLOWANCE:
                return "Free baggage allowance";
            case this.FT_PDF_417_CODEC:
                return "PDF417 codec";
            case this.FT_IDENTITY_CARD_NUMBER_CHECKSUM:
                return "Checksum for identity card number";
            case this.FT_IDENTITY_CARD_NUMBER_CHECK_DIGIT:
                return "Check digit for identity card number";
            case this.FT_VETERAN:
                return "Veteran";
            case this.FT_DL_CLASS_CODE_A_1_FROM:
                return "DL category A1 valid from";
            case this.FT_DL_CLASS_CODE_A_1_TO:
                return "DL category A1 valid to";
            case this.FT_DL_CLASS_CODE_A_1_NOTES:
                return "DL category A1 codes";
            case this.FT_DL_CLASS_CODE_A_FROM:
                return "DL category A valid from";
            case this.FT_DL_CLASS_CODE_A_TO:
                return "DL category A valid to";
            case this.FT_DL_CLASS_CODE_A_NOTES:
                return "DL category A codes";
            case this.FT_DL_CLASS_CODE_B_FROM:
                return "DL category B valid from";
            case this.FT_DL_CLASS_CODE_B_TO:
                return "DL category B valid to";
            case this.FT_DL_CLASS_CODE_B_NOTES:
                return "DL category B codes";
            case this.FT_DL_CLASS_CODE_C_1_FROM:
                return "DL category C1 valid from";
            case this.FT_DL_CLASS_CODE_C_1_TO:
                return "DL category C1 valid to";
            case this.FT_DL_CLASS_CODE_C_1_NOTES:
                return "DL category C1 codes";
            case this.FT_DL_CLASS_CODE_C_FROM:
                return "DL category C valid from";
            case this.FT_DL_CLASS_CODE_C_TO:
                return "DL category C valid to";
            case this.FT_DL_CLASS_CODE_C_NOTES:
                return "DL category C codes";
            case this.FT_DL_CLASS_CODE_D_1_FROM:
                return "DL category D1 valid from";
            case this.FT_DL_CLASS_CODE_D_1_TO:
                return "DL category D1 valid to";
            case this.FT_DL_CLASS_CODE_D_1_NOTES:
                return "DL category D1 codes";
            case this.FT_DL_CLASS_CODE_D_FROM:
                return "DL category D valid from";
            case this.FT_DL_CLASS_CODE_D_TO:
                return "DL category D valid to";
            case this.FT_DL_CLASS_CODE_D_NOTES:
                return "DL category D codes";
            case this.FT_DL_CLASS_CODE_BE_FROM:
                return "DL category BE valid from";
            case this.FT_DL_CLASS_CODE_BE_TO:
                return "DL category BE valid to";
            case this.FT_DL_CLASS_CODE_BE_NOTES:
                return "DL category BE codes";
            case this.FT_DL_CLASS_CODE_C_1_E_FROM:
                return "DL category C1E valid from";
            case this.FT_DL_CLASS_CODE_C_1_E_TO:
                return "DL category C1E valid to";
            case this.FT_DL_CLASS_CODE_C_1_E_NOTES:
                return "DL category C1E codes";
            case this.FT_DL_CLASS_CODE_CE_FROM:
                return "DL category CE valid from";
            case this.FT_DL_CLASS_CODE_CE_TO:
                return "DL category CE valid to";
            case this.FT_DL_CLASS_CODE_CE_NOTES:
                return "DL category CE codes";
            case this.FT_DL_CLASS_CODE_D_1_E_FROM:
                return "DL category D1E valid from";
            case this.FT_DL_CLASS_CODE_D_1_E_TO:
                return "DL category D1E valid to";
            case this.FT_DL_CLASS_CODE_D_1_E_NOTES:
                return "DL category D1E codes";
            case this.FT_DL_CLASS_CODE_DE_FROM:
                return "DL category DE valid from";
            case this.FT_DL_CLASS_CODE_DE_TO:
                return "DL category DE valid to";
            case this.FT_DL_CLASS_CODE_DE_NOTES:
                return "DL category DE codes";
            case this.FT_DL_CLASS_CODE_M_FROM:
                return "DL category M valid from";
            case this.FT_DL_CLASS_CODE_M_TO:
                return "DL category M valid to";
            case this.FT_DL_CLASS_CODE_M_NOTES:
                return "DL category M codes";
            case this.FT_DL_CLASS_CODE_L_FROM:
                return "DL category L valid from";
            case this.FT_DL_CLASS_CODE_L_TO:
                return "DL category L valid to";
            case this.FT_DL_CLASS_CODE_L_NOTES:
                return "DL category L codes";
            case this.FT_DL_CLASS_CODE_T_FROM:
                return "DL category T valid from";
            case this.FT_DL_CLASS_CODE_T_TO:
                return "DL category T valid to";
            case this.FT_DL_CLASS_CODE_T_NOTES:
                return "DL category T codes";
            case this.FT_DL_CLASS_CODE_AM_FROM:
                return "DL category AM valid from";
            case this.FT_DL_CLASS_CODE_AM_TO:
                return "DL category AM valid to";
            case this.FT_DL_CLASS_CODE_AM_NOTES:
                return "DL category AM codes";
            case this.FT_DL_CLASS_CODE_A_2_FROM:
                return "DL category A2 valid from";
            case this.FT_DL_CLASS_CODE_A_2_TO:
                return "DL category A2 valid to";
            case this.FT_DL_CLASS_CODE_A_2_NOTES:
                return "DL category A2 codes";
            case this.FT_DL_CLASS_CODE_B_1_FROM:
                return "DL category B1 valid from";
            case this.FT_DL_CLASS_CODE_B_1_TO:
                return "DL category B1 valid to";
            case this.FT_DL_CLASS_CODE_B_1_NOTES:
                return "DL category B1 codes";
            case this.FT_SURNAME_AT_BIRTH:
                return "Surname at birth";
            case this.FT_CIVIL_STATUS:
                return "Civil status";
            case this.FT_NUMBER_OF_SEATS:
                return "Number of seats";
            case this.FT_NUMBER_OF_STANDING_PLACES:
                return "Number of standing places";
            case this.FT_MAX_SPEED:
                return "Max speed";
            case this.FT_FUEL_TYPE:
                return "Fuel type";
            case this.FT_EC_ENVIRONMENTAL_TYPE:
                return "Vehicle environmental type";
            case this.FT_POWER_WEIGHT_RATIO:
                return "Power-to-weight ratio";
            case this.FT_MAX_MASS_OF_TRAILER_BRAKED:
                return "Max mass of trailer (braked)";
            case this.FT_MAX_MASS_OF_TRAILER_UNBRAKED:
                return "Max mass of trailer (unbraked)";
            case this.FT_TRANSMISSION_TYPE:
                return "Transmission type";
            case this.FT_TRAILER_HITCH:
                return "Trailer hitch";
            case this.FT_ACCOMPANIED_BY:
                return "Accompanied by";
            case this.FT_POLICE_DISTRICT:
                return "Police district";
            case this.FT_FIRST_ISSUE_DATE:
                return "First issue date";
            case this.FT_PAYLOAD_CAPACITY:
                return "Payload capacity";
            case this.FT_NUMBER_OF_AXELS:
                return "Number of axles";
            case this.FT_PERMISSIBLE_AXLE_LOAD:
                return "Permissible axle load";
            case this.FT_PRECINCT:
                return "Precinct";
            case this.FT_INVITED_BY:
                return "Invited by";
            case this.FT_PURPOSE_OF_ENTRY:
                return "Purpose of entry";
            case this.FT_SKIN_COLOR:
                return "Skin color";
            case this.FT_COMPLEXION:
                return "Complexion";
            case this.FT_AIRPORT_FROM:
                return "Airport of departure";
            case this.FT_AIRPORT_TO:
                return "Airport of arrival";
            case this.FT_AIRLINE_NAME:
                return "Airline name";
            case this.FT_AIRLINE_NAME_FREQUENT_FLYER:
                return "Airline loyalty program for frequent flyers";
            case this.FT_LICENSE_NUMBER:
                return "License number";
            case this.FT_IN_TANKS:
                return "In tanks";
            case this.FT_EXEPT_IN_TANKS:
                return "Except in tanks";
            case this.FT_FAST_TRACK:
                return "Fast Track service";
            case this.FT_OWNER:
                return "Owner";
            case this.FT_MRZ_STRINGS_ICAO_RFID:
                return "MRZ lines from ICAO RFID";
            case this.FT_NUMBER_OF_CARD_ISSUANCE:
                return "Number of card issuances";
            case this.FT_NUMBER_OF_CARD_ISSUANCE_CHECKSUM:
                return "Checksum for number of card issuances";
            case this.FT_NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT:
                return "Check digit for number of card issuances";
            case this.FT_CENTURY_DATE_OF_BIRTH:
                return "Century of birth";
            case this.FT_DL_CLASSCODE_A3_FROM:
                return "DL category A3 valid from";
            case this.FT_DL_CLASSCODE_A3_TO:
                return "DL category A3 valid to";
            case this.FT_DL_CLASSCODE_A3_NOTES:
                return "DL category A3 codes";
            case this.FT_DL_CLASSCODE_C2_FROM:
                return "DL category C2 valid from";
            case this.FT_DL_CLASSCODE_C2_TO:
                return "DL category C2 valid to";
            case this.FT_DL_CLASSCODE_C2_NOTES:
                return "DL category C2 codes";
            case this.FT_DL_CLASSCODE_B2_FROM:
                return "DL category B2 valid from";
            case this.FT_DL_CLASSCODE_B2_TO:
                return "DL category B2 valid to";
            case this.FT_DL_CLASSCODE_B2_NOTES:
                return "DL category B2 codes";
            case this.FT_DL_CLASSCODE_D2_FROM:
                return "DL category D2 valid from";
            case this.FT_DL_CLASSCODE_D2_TO:
                return "DL category D2 valid to";
            case this.FT_DL_CLASSCODE_D2_NOTES:
                return "DL category D2 codes";
            case this.FT_DL_CLASSCODE_B2E_FROM:
                return "DL category B2E valid from";
            case this.FT_DL_CLASSCODE_B2E_TO:
                return "DL category B2E valid to";
            case this.FT_DL_CLASSCODE_B2E_NOTES:
                return "DL category B2E codes";
            case this.FT_DL_CLASSCODE_G_FROM:
                return "DL category G valid from";
            case this.FT_DL_CLASSCODE_G_TO:
                return "DL category G valid to";
            case this.FT_DL_CLASSCODE_G_NOTES:
                return "DL category G codes";
            case this.FT_DL_CLASSCODE_J_FROM:
                return "DL category J valid from";
            case this.FT_DL_CLASSCODE_J_TO:
                return "DL category J valid to";
            case this.FT_DL_CLASSCODE_J_NOTES:
                return "DL category J codes";
            case this.FT_DL_CLASSCODE_LC_FROM:
                return "DL category LC valid from";
            case this.FT_DL_CLASSCODE_LC_TO:
                return "DL category LC valid to";
            case this.FT_DLC_LASSCODE_LC_NOTES:
                return "DL category LC codes";
            case this.FT_BANKCARDNUMBER:
                return "Bank card number";
            case this.FT_BANKCARDVALIDTHRU:
                return "Bank card validity";
            case this.FT_TAX_NUMBER:
                return "Tax number";
            case this.FT_SBH_SECURITYOPTIONS:
                return "SBH security options";
            case this.FT_SBH_INTEGRITYOPTIONS:
                return "SBH integrity options";
            case this.FT_DATE_OF_CREATION:
                return "Creation date";
            case this.FT_VALIDITY_PERIOD:
                return "Validity period";
            case this.FT_PATRON_HEADER_VERSION:
                return "Patron header version";
            case this.FT_BDB_TYPE:
                return "BDB type";
            case this.FT_BIOMETRIC_TYPE:
                return "Biometric type";
            case this.FT_BIOMETRIC_SUBTYPE:
                return "Biometric subtype";
            case this.FT_BIOMETRIC_PRODUCTID:
                return "Biometric product ID";
            case this.FT_BIOMETRIC_FORMAT_OWNER:
                return "Biometric format owner";
            case this.FT_BIOMETRIC_FORMAT_TYPE:
                return "Biometric format type";
            case this.FT_PHONE:
                return "Phone";
            case this.FT_PROFESSION:
                return "Profession";
            case this.FT_TITLE:
                return "Position";
            case this.FT_PERSONAL_SUMMARY:
                return "Personal data summary";
            case this.FT_OTHER_VALID_ID:
                return "Other valid IDs";
            case this.FT_CUSTODY_INFO:
                return "Custody info";
            case this.FT_OTHER_NAME:
                return "Other name";
            case this.FT_OBSERVATIONS:
                return "Observations";
            case this.FT_TAX:
                return "Tax";
            case this.FT_DATE_OF_PERSONALIZATION:
                return "Personalization date";
            case this.FT_PERSONALIZATION_SN:
                return "Serial number of personalization";
            case this.FT_OTHERPERSON_NAME:
                return "Other person, name";
            case this.FT_PERSONTONOTIFY_DATE_OF_RECORD:
                return "Notify person: Date of record";
            case this.FT_PERSONTONOTIFY_NAME:
                return "Notify person: Name";
            case this.FT_PERSONTONOTIFY_PHONE:
                return "Notify person: Phone";
            case this.FT_PERSONTONOTIFY_ADDRESS:
                return "Notify person: Address";
            case this.FT_DS_CERTIFICATE_ISSUER:
                return "DS certificate issuer";
            case this.FT_DS_CERTIFICATE_SUBJECT:
                return "DS certificate subject";
            case this.FT_DS_CERTIFICATE_VALIDFROM:
                return "DS certificate valid from";
            case this.FT_DS_CERTIFICATE_VALIDTO:
                return "DS certificate valid to";
            case this.FT_VRC_DATAOBJECT_ENTRY:
                return "Vehicle data from the DG1 data group";
            case this.FT_GRANDFATHERNAME:
                return "Grandfather\'s name";
            case this.FT_HEALTH_NUMBER:
                return "Health insurance number";
            case this.FT_TYPE_APPROVAL_NUMBER:
                return "Type of approval number";
            case this.FT_ADMINISTRATIVE_NUMBER:
                return "Administrative number";
            case this.FT_DOCUMENT_DISCRIMINATOR:
                return "Document discriminator";
            case this.FT_DATA_DISCRIMINATOR:
                return "Data discriminator";
            case this.FT_ISO_ISSUER_ID_NUMBER:
                return "ID number of ISO issuer";
            case this.FT_SELECTEE_INDICATOR:
                return "Selectee indicator";
            case this.FT_MOTHER_SURNAME:
                return "Mother\'s surname";
            case this.FT_MOTHER_GIVENNAME:
                return "Mother\'s given name";
            case this.FT_FATHER_SURNAME:
                return "Father\'s surname";
            case this.FT_FATHER_GIVENNAME:
                return "Father\'s given name";
            case this.FT_MOTHER_DATEOFBIRTH:
                return "Mother\'s date of birth";
            case this.FT_FATHER_DATEOFBIRTH:
                return "Father\'s date of birth";
            case this.FT_MOTHER_PERSONALNUMBER:
                return "Mother\'s personal number";
            case this.FT_FATHER_PERSONALNUMBER:
                return "Father\'s personal number";
            case this.FT_MOTHER_PLACEOFBIRTH:
                return "Mother\'s place of birth";
            case this.FT_FATHER_PLACEOFBIRTH:
                return "Father\'s place of birth";
            case this.FT_MOTHER_COUNTRYOFBIRTH:
                return "Mother\'s country of birth";
            case this.FT_FATHER_COUNTRYOFBIRTH:
                return "Father\'s country of birth";
            case this.FT_DATE_FIRST_RENEWAL:
                return "Date of first renewal";
            case this.FT_DATE_SECOND_RENEWAL:
                return "Date of second renewal";
            case this.FT_PLACE_OF_EXAMINATION:
                return "Place of examination";
            case this.FT_APPLICATION_NUMBER:
                return "Application number";
            case this.FT_VOUCHER_NUMBER:
                return "Voucher number";
            case this.FT_AUTHORIZATION_NUMBER:
                return "Authorization number";
            case this.FT_FACULTY:
                return "Faculty";
            case this.FT_FORM_OF_EDUCATION:
                return "Form of education";
            case this.FT_DNI_NUMBER:
                return "DNI number";
            case this.FT_RETIREMENT_NUMBER:
                return "Retirement number";
            case this.FT_PROFESSIONAL_ID_NUMBER:
                return "Professional ID number";
            case this.FT_AGE_AT_ISSUE:
                return "Age at issue";
            case this.FT_YEARS_SINCE_ISSUE:
                return "Years since issue";
            case this.FT_DLCLASSCODE_BTP_FROM:
                return "DL category BTP valid from";
            case this.FT_DLCLASSCODE_BTP_NOTES:
                return "DL category BTP codes";
            case this.FT_DLCLASSCODE_BTP_TO:
                return "DL category BTP valid to";
            case this.FT_DLCLASSCODE_C3_FROM:
                return "DL category C3 valid from";
            case this.FT_DLCLASSCODE_C3_NOTES:
                return "DL category C3 codes";
            case this.FT_DLCLASSCODE_C3_TO:
                return "DL category C3 valid to";
            case this.FT_DLCLASSCODE_E_FROM:
                return "DL category E valid from";
            case this.FT_DLCLASSCODE_E_NOTES:
                return "DL category E codes";
            case this.FT_DLCLASSCODE_E_TO:
                return "DL category E valid to";
            case this.FT_DLCLASSCODE_F_FROM:
                return "DL category F valid from";
            case this.FT_DLCLASSCODE_F_NOTES:
                return "DL category F codes";
            case this.FT_DLCLASSCODE_F_TO:
                return "DL category F valid to";
            case this.FT_DLCLASSCODE_FA_FROM:
                return "DL category FA valid from";
            case this.FT_DLCLASSCODE_FA_NOTES:
                return "DL category FA codes";
            case this.FT_DLCLASSCODE_FA_TO:
                return "DL category FA valid to";
            case this.FT_DLCLASSCODE_FA1_FROM:
                return "DL category FA1 valid from";
            case this.FT_DLCLASSCODE_FA1_NOTES:
                return "DL category FA1 codes";
            case this.FT_DLCLASSCODE_FA1_TO:
                return "DL category FA1 valid to";
            case this.FT_DLCLASSCODE_FB_FROM:
                return "DL category FB valid from";
            case this.FT_DLCLASSCODE_FB_NOTES:
                return "DL category FB codes";
            case this.FT_DLCLASSCODE_FB_TO:
                return "DL category FB valid to";
            case this.FT_DLCLASSCODE_G1_FROM:
                return "DL category G1 valid from";
            case this.FT_DLCLASSCODE_G1_NOTES:
                return "DL category G1 codes";
            case this.FT_DLCLASSCODE_G1_TO:
                return "DL category G1 valid to";
            case this.FT_DLCLASSCODE_H_FROM:
                return "DL category H valid from";
            case this.FT_DLCLASSCODE_H_NOTES:
                return "DL category H codes";
            case this.FT_DLCLASSCODE_H_TO:
                return "DL category H valid to";
            case this.FT_DLCLASSCODE_I_FROM:
                return "DL category I valid from";
            case this.FT_DLCLASSCODE_I_NOTES:
                return "DL category I codes";
            case this.FT_DLCLASSCODE_I_TO:
                return "DL category I valid to";
            case this.FT_DLCLASSCODE_K_FROM:
                return "DL category K valid from";
            case this.FT_DLCLASSCODE_K_NOTES:
                return "DL category K codes";
            case this.FT_DLCLASSCODE_K_TO:
                return "DL category K valid to";
            case this.FT_DLCLASSCODE_LK_FROM:
                return "DL category LK valid from";
            case this.FT_DLCLASSCODE_LK_NOTES:
                return "DL category LK codes";
            case this.FT_DLCLASSCODE_LK_TO:
                return "DL category LK valid to";
            case this.FT_DLCLASSCODE_N_FROM:
                return "DL category N valid from";
            case this.FT_DLCLASSCODE_N_NOTES:
                return "DL category N codes";
            case this.FT_DLCLASSCODE_N_TO:
                return "DL category N valid to";
            case this.FT_DLCLASSCODE_S_FROM:
                return "DL category S valid from";
            case this.FT_DLCLASSCODE_S_NOTES:
                return "DL category S codes";
            case this.FT_DLCLASSCODE_S_TO:
                return "DL category S valid to";
            case this.FT_DLCLASSCODE_TB_FROM:
                return "DL category TB valid from";
            case this.FT_DLCLASSCODE_TB_NOTES:
                return "DL category TB codes";
            case this.FT_DLCLASSCODE_TB_TO:
                return "DL category TB valid to";
            case this.FT_DLCLASSCODE_TM_FROM:
                return "DL category TM valid from";
            case this.FT_DLCLASSCODE_TM_NOTES:
                return "DL category TM codes";
            case this.FT_DLCLASSCODE_TM_TO:
                return "DL category TM valid to";
            case this.FT_DLCLASSCODE_TR_FROM:
                return "DL category TR valid from";
            case this.FT_DLCLASSCODE_TR_NOTES:
                return "DL category TR codes";
            case this.FT_DLCLASSCODE_TR_TO:
                return "DL category TR valid to";
            case this.FT_DLCLASSCODE_TV_FROM:
                return "DL category TV valid from";
            case this.FT_DLCLASSCODE_TV_NOTES:
                return "DL category TV codes";
            case this.FT_DLCLASSCODE_TV_TO:
                return "DL category TV valid to";
            case this.FT_DLCLASSCODE_V_FROM:
                return "DL category V valid from";
            case this.FT_DLCLASSCODE_V_NOTES:
                return "DL category V codes";
            case this.FT_DLCLASSCODE_V_TO:
                return "DL category V valid to";
            case this.FT_DLCLASSCODE_W_FROM:
                return "DL category W valid from";
            case this.FT_DLCLASSCODE_W_NOTES:
                return "DL category W codes";
            case this.FT_DLCLASSCODE_W_TO:
                return "DL category W valid to";
            case this.FT_CALIBER:
                return "Caliber";
            case this.FT_CITIZENSHIP_OF_FIRST_PERSON:
                return "Citizenship of the first person";
            case this.FT_CITIZENSHIP_OF_SECOND_PERSON:
                return "Citizenship of the second person";
            case this.FT_CVV:
                return "CVV/CVC";
            case this.FT_DATE_OF_BIRTH_OF_HUSBAND:
                return "Date of birth of husband";
            case this.FT_DATE_OF_BIRTH_OF_WIFE:
                return "Date of birth of wife";
            case this.FT_MAKE:
                return "Make";
            case this.FT_MODEL:
                return "Model";
            case this.FT_NUMBER_OF_CYLINDERS:
                return "Number of cylinders";
            case this.FT_SURNAME_OF_HUSBAND_AFTER_REGISTRATION:
                return "Surname of husband after registration";
            case this.FT_SURNAME_OF_WIFE_AFTER_REGISTRATION:
                return "Surname of wife after registration";
            case this.FT_URL:
                return "URL";
            case this.FT_DATE_OF_INSURANCE_EXPIRY:
                return "Expiry date of insurance";
            case this.FT_MORTGAGE_BY:
                return "Mortgage by";
            case this.FT_OLD_DOCUMENT_NUMBER:
                return "Old document number";
            case this.FT_OLD_DATE_OF_ISSUE:
                return "Old date of issue";
            case this.FT_OLD_PLACE_OF_ISSUE:
                return "Old place of issue";
            case this.FT_DLCLASSCODE_LR_FROM:
                return "DL category LR valid from";
            case this.FT_DLCLASSCODE_LR_TO:
                return "DL category LR valid to";
            case this.FT_DLCLASSCODE_LR_NOTES:
                return "DL category LR codes";
            case this.FT_DLCLASSCODE_MR_FROM:
                return "DL category MR valid from";
            case this.FT_DLCLASSCODE_MR_TO:
                return "DL category MR valid to";
            case this.FT_DLCLASSCODE_MR_NOTES:
                return "DL category MR codes";
            case this.FT_DLCLASSCODE_HR_FROM:
                return "DL category HR valid from";
            case this.FT_DLCLASSCODE_HR_TO:
                return "DL category HR valid to";
            case this.FT_DLCLASSCODE_HR_NOTES:
                return "DL category HR codes";
            case this.FT_DLCLASSCODE_HC_FROM:
                return "DL category HC valid from";
            case this.FT_DLCLASSCODE_HC_TO:
                return "DL category HC valid to";
            case this.FT_DLCLASSCODE_HC_NOTES:
                return "DL category HC codes";
            case this.FT_DLCLASSCODE_MC_FROM:
                return "DL category MC valid from";
            case this.FT_DLCLASSCODE_MC_TO:
                return "DL category MC valid to";
            case this.FT_DLCLASSCODE_MC_NOTES:
                return "DL category MC codes";
            case this.FT_DLCLASSCODE_RE_FROM:
                return "DL category RE valid from";
            case this.FT_DLCLASSCODE_RE_TO:
                return "DL category RE valid to";
            case this.FT_DLCLASSCODE_RE_NOTES:
                return "DL category RE codes";
            case this.FT_DLCLASSCODE_R_FROM:
                return "DL category R valid from";
            case this.FT_DLCLASSCODE_R_TO:
                return "DL category R valid to";
            case this.FT_DLCLASSCODE_R_NOTES:
                return "DL category R codes";
            case this.FT_DLCLASSCODE_CA_FROM:
                return "DL category CA valid from";
            case this.FT_DLCLASSCODE_CA_TO:
                return "DL category CA valid to";
            case this.FT_DLCLASSCODE_CA_NOTES:
                return "DL category CA codes";
            default:
                return value.toString();
        }
    }
};
export var FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3,
};
export var FrameShapeType = {
    LINE: 0,
    CORNER: 1,
};
export var LCID = {
    LATIN: 0,
    AFRIKAANS: 1078,
    ALBANIAN: 1052,
    ARABIC_ALGERIA: 5121,
    ARABIC_BAHRAIN: 15361,
    ARABIC_EGYPT: 3073,
    ARABIC_IRAQ: 2049,
    ARABIC_JORDAN: 11265,
    ARABIC_KUWAIT: 13313,
    ARABIC_LEBANON: 12289,
    ARABIC_LIBYA: 4097,
    ARABIC_MOROCCO: 6145,
    ARABIC_OMAN: 8193,
    ARABIC_QATAR: 16385,
    ARABIC_SAUDI_ARABIA: 1025,
    ARABIC_SYRIA: 10241,
    ARABIC_TUNISIA: 7169,
    ARABIC_UAE: 14337,
    ARABIC_YEMEN: 9217,
    ARABIC_ARMENIAN: 1067,
    AZERI_CYRILIC: 2092,
    AZERI_LATIN: 1068,
    BASQUE: 1069,
    BELARUSIAN: 1059,
    BULGARIAN: 1026,
    CATALAN: 1027,
    CHINESE_HONGKONG_SAR: 3076,
    CHINESE_MACAO_SAR: 5124,
    CHINESE: 2052,
    CHINESE_SINGAPORE: 4100,
    CHINESE_TAIWAN: 1028,
    CROATIAN: 1050,
    CZECH: 1029,
    DANISH: 1030,
    DIVEHI: 1125,
    DUTCH_BELGIUM: 2067,
    DUTCH_NETHERLANDS: 1043,
    ENGLISH_AUSTRALIA: 3081,
    ENGLISH_BELIZE: 10249,
    ENGLISH_CANADA: 4105,
    ENGLISH_CARRIBEAN: 9225,
    ENGLISH_IRELAND: 6153,
    ENGLISH_JAMAICA: 8201,
    ENGLISH_NEW_ZEALAND: 5129,
    ENGLISH_PHILIPPINES: 13321,
    ENGLISH_SOUTH_AFRICA: 7177,
    ENGLISH_TRINIDAD: 11273,
    ENGLISH_UK: 2057,
    ENGLISH_US: 1033,
    ENGLISH_ZIMBABWE: 12297,
    ESTONIAN: 1061,
    FAEROESE: 1080,
    FARSI: 1065,
    FINNISH: 1035,
    FRENCH_BELGIUM: 2060,
    FRENCH_CANADA: 3084,
    FRENCH_FRANCE: 1036,
    FRENCH_LUXEMBOURG: 5132,
    FRENCH_MONACO: 6156,
    FRENCH_SWITZERLAND: 4108,
    FYRO_MACEDONIAN: 1071,
    GALICIAN: 1110,
    GEORGIAN: 1079,
    GERMAN_AUSTRIA: 3079,
    GERMAN_GERMANY: 1031,
    GERMAN_LIECHTENSTEIN: 5127,
    GERMAN_LUXEMBOURG: 4103,
    GERMAN_SWITZERLAND: 2055,
    GREEK: 1032,
    GUJARATI: 1095,
    HEBREW: 1037,
    HINDI_INDIA: 1081,
    HUNGARIAN: 1038,
    ICELANDIC: 1039,
    INDONESIAN: 1057,
    ITALIAN_ITALY: 1040,
    ITALIAN_SWITZERLAND: 2064,
    JAPANESE: 1041,
    KANNADA: 1099,
    KAZAKH: 1087,
    KONKANI: 1111,
    KOREAN: 1042,
    KYRGYZ_CYRILICK: 1088,
    LATVIAN: 1062,
    LITHUANIAN: 1063,
    MALAY_MALAYSIA: 1086,
    MALAY_BRUNEI_DARUSSALAM: 2110,
    MARATHI: 1102,
    MONGOLIAN_CYRILIC: 1104,
    NORWEGIAN_BOKMAL: 1044,
    NORWEGIAN_NYORSK: 2068,
    POLISH: 1045,
    PORTUGUESE_BRAZIL: 1046,
    PORTUGUESE_PORTUGAL: 2070,
    PUNJABI: 1094,
    RHAETO_ROMANIC: 1047,
    ROMANIAN: 1048,
    RUSSIAN: 1049,
    SANSKRIT: 1103,
    SERBIAN_CYRILIC: 3098,
    SERBIAN_LATIN: 2074,
    SLOVAK: 1051,
    SLOVENIAN: 1060,
    SPANISH_ARGENTINA: 11274,
    SPANISH_BOLIVIA: 16394,
    SPANISH_CHILE: 13322,
    SPANICH_COLOMBIA: 9226,
    SPANISH_COSTA_RICA: 5130,
    SPANISH_DOMINICAN_REPUBLIC: 7178,
    SPANISH_ECUADOR: 12298,
    SPANISH_EL_SALVADOR: 17418,
    SPANISH_GUATEMALA: 4106,
    SPANISH_HONDURAS: 18442,
    SPANISH_MEXICO: 2058,
    SPANISH_NICARAGUA: 19466,
    SPANISH_PANAMA: 6154,
    SPANISH_PARAGUAY: 15370,
    SPANISH_PERU: 10250,
    SPANISH_PUERTO_RICO: 20490,
    SPANISH_TRADITIONAL_SORT: 1034,
    SPANISH_INTERNATIONAL_SORT: 3082,
    SPANISH_URUGUAY: 14346,
    SPANISH_VENEZUELA: 8202,
    SWAHILI: 1089,
    SWEDISH: 1053,
    SWEDISH_FINLAND: 2077,
    SYRIAC: 1114,
    TAMIL: 1097,
    TATAR: 1092,
    TELUGU: 1098,
    THAI_THAILAND: 1054,
    TURKISH: 1055,
    TAJIK_CYRILLIC: 1064,
    TURKMEN: 1090,
    UKRAINIAN: 1058,
    URDU: 1056,
    UZBEK_CYRILIC: 2115,
    UZBEK_LATIN: 1091,
    VIETNAMESE: 1066,
    CTC_SIMPLIFIED: 50001,
    CTC_TRADITIONAL: 50002,
    getTranslation: function (value) {
        switch (value) {
            case this.LATIN:
                return "Latin";
            case this.AFRIKAANS:
                return "Afrikaans";
            case this.ALBANIAN:
                return "Albanian";
            case this.ARABIC_ALGERIA:
                return "Arabic (Algeria)";
            case this.ARABIC_BAHRAIN:
                return "Arabic (Bahrain)";
            case this.ARABIC_EGYPT:
                return "Arabic (Egypt)";
            case this.ARABIC_IRAQ:
                return "Arabic (Iraq)";
            case this.ARABIC_JORDAN:
                return "Arabic (Jordan)";
            case this.ARABIC_KUWAIT:
                return "Arabic (Kuwait)";
            case this.ARABIC_LEBANON:
                return "Arabic (Lebanon)";
            case this.ARABIC_LIBYA:
                return "Arabic (Libya)";
            case this.ARABIC_MOROCCO:
                return "Arabic (Morocco)";
            case this.ARABIC_OMAN:
                return "Arabic (Oman)";
            case this.ARABIC_QATAR:
                return "Arabic (Qatar)";
            case this.ARABIC_SAUDI_ARABIA:
                return "Arabic (Saudi Arabia)";
            case this.ARABIC_SYRIA:
                return "Arabic (Syria)";
            case this.ARABIC_TUNISIA:
                return "Arabic (Tunisia)";
            case this.ARABIC_UAE:
                return "Arabic (U.A.E.)";
            case this.ARABIC_YEMEN:
                return "Arabic (Yemen)";
            case this.ARABIC_ARMENIAN:
                return "Armenian";
            case this.AZERI_CYRILIC:
                return "Azeri (Cyrillic)";
            case this.AZERI_LATIN:
                return "Azeri (Latin)";
            case this.BASQUE:
                return "Basque";
            case this.BELARUSIAN:
                return "Belarusian";
            case this.BULGARIAN:
                return "Bulgarian";
            case this.CATALAN:
                return "Catalan";
            case this.CHINESE_HONGKONG_SAR:
                return "Chinese (HongKong S.A.R.)";
            case this.CHINESE_MACAO_SAR:
                return "Chinese (Macao S.A.R.)";
            case this.CHINESE:
                return "Chinese";
            case this.CHINESE_SINGAPORE:
                return "Chinese (Singapore)";
            case this.CHINESE_TAIWAN:
                return "Chinese (Taiwan)";
            case this.CROATIAN:
                return "Croatian";
            case this.CZECH:
                return "Czech";
            case this.DANISH:
                return "Danish";
            case this.DIVEHI:
                return "Divehi";
            case this.DUTCH_BELGIUM:
                return "Dutch (Belgium)";
            case this.DUTCH_NETHERLANDS:
                return "Dutch (Netherlands)";
            case this.ENGLISH_AUSTRALIA:
                return "English (Australia)";
            case this.ENGLISH_BELIZE:
                return "English (Belize)";
            case this.ENGLISH_CANADA:
                return "English (Canada)";
            case this.ENGLISH_CARRIBEAN:
                return "English (Caribbean)";
            case this.ENGLISH_IRELAND:
                return "English (Ireland)";
            case this.ENGLISH_JAMAICA:
                return "English (Jamaica)";
            case this.ENGLISH_NEW_ZEALAND:
                return "English (New Zealand)";
            case this.ENGLISH_PHILIPPINES:
                return "English (Philippines)";
            case this.ENGLISH_SOUTH_AFRICA:
                return "English (South Africa)";
            case this.ENGLISH_TRINIDAD:
                return "English (Trinidad)";
            case this.ENGLISH_UK:
                return "English (United Kingdom)";
            case this.ENGLISH_US:
                return "English (United States)";
            case this.ENGLISH_ZIMBABWE:
                return "English (Zimbabwe)";
            case this.ESTONIAN:
                return "Estonian";
            case this.FAEROESE:
                return "Faeroese";
            case this.FARSI:
                return "Farsi";
            case this.FINNISH:
                return "Finnish";
            case this.FRENCH_BELGIUM:
                return "French (Belgium)";
            case this.FRENCH_CANADA:
                return "French (Canada)";
            case this.FRENCH_FRANCE:
                return "French (France)";
            case this.FRENCH_LUXEMBOURG:
                return "French (Luxembourg)";
            case this.FRENCH_MONACO:
                return "French (Monaco)";
            case this.FRENCH_SWITZERLAND:
                return "French (Switzerland)";
            case this.GALICIAN:
                return "Galician";
            case this.GEORGIAN:
                return "Georgian";
            case this.GERMAN_AUSTRIA:
                return "German (Austria)";
            case this.GERMAN_GERMANY:
                return "German (Germany)";
            case this.GERMAN_LIECHTENSTEIN:
                return "German (Liechtenstein)";
            case this.GERMAN_LUXEMBOURG:
                return "German (Luxembourg)";
            case this.GERMAN_SWITZERLAND:
                return "German (Switzerland)";
            case this.GREEK:
                return "Greek";
            case this.GUJARATI:
                return "Gujarati";
            case this.HEBREW:
                return "Hebrew";
            case this.HINDI_INDIA:
                return "Hindi (India)";
            case this.HUNGARIAN:
                return "Hungarian";
            case this.ICELANDIC:
                return "Icelandic";
            case this.INDONESIAN:
                return "Indonesian";
            case this.ITALIAN_ITALY:
                return "Italian (Italy)";
            case this.ITALIAN_SWITZERLAND:
                return "Italian (Switzerland)";
            case this.JAPANESE:
                return "Japanese";
            case this.KANNADA:
                return "Kannada";
            case this.KAZAKH:
                return "Kazakh";
            case this.KONKANI:
                return "Konkani";
            case this.KOREAN:
                return "Korean";
            case this.KYRGYZ_CYRILICK:
                return "Kyrgyz (Cyrillic)";
            case this.LATVIAN:
                return "Latvian";
            case this.LITHUANIAN:
                return "Lithuanian";
            case this.FYRO_MACEDONIAN:
                return "FYRO Macedonian";
            case this.MALAY_MALAYSIA:
                return "Malay (Malaysia)";
            case this.MALAY_BRUNEI_DARUSSALAM:
                return "Malay (Brunei Darussalam)";
            case this.MARATHI:
                return "Marathi";
            case this.MONGOLIAN_CYRILIC:
                return "Mongolian (Cyrillic)";
            case this.NORWEGIAN_BOKMAL:
                return "Norwegian (Bokmal)";
            case this.NORWEGIAN_NYORSK:
                return "Norwegian (Nynorsk)";
            case this.POLISH:
                return "Polish";
            case this.PORTUGUESE_BRAZIL:
                return "Portuguese (Brazil)";
            case this.PORTUGUESE_PORTUGAL:
                return "Portuguese (Portugal)";
            case this.PUNJABI:
                return "Punjabi";
            case this.RHAETO_ROMANIC:
                return "Rhaeto-Romanic";
            case this.ROMANIAN:
                return "Romanian";
            case this.RUSSIAN:
                return "Russian";
            case this.SANSKRIT:
                return "Sanskrit";
            case this.SERBIAN_CYRILIC:
                return "Serbian (Cyrillic)";
            case this.SERBIAN_LATIN:
                return "Serbian (Latin)";
            case this.SLOVAK:
                return "Slovak";
            case this.SLOVENIAN:
                return "Slovenian";
            case this.SPANISH_ARGENTINA:
                return "Spanish (Argentina)";
            case this.SPANISH_BOLIVIA:
                return "Spanish (Bolivia)";
            case this.SPANISH_CHILE:
                return "Spanish (Chile)";
            case this.SPANICH_COLOMBIA:
                return "Spanish (Colombia)";
            case this.SPANISH_COSTA_RICA:
                return "Spanish (Costa Rica)";
            case this.SPANISH_DOMINICAN_REPUBLIC:
                return "Spanish (Dominican Republic)";
            case this.SPANISH_ECUADOR:
                return "Spanish (Ecuador)";
            case this.SPANISH_EL_SALVADOR:
                return "Spanish (El Salvador)";
            case this.SPANISH_GUATEMALA:
                return "Spanish (Guatemala)";
            case this.SPANISH_HONDURAS:
                return "Spanish (Honduras)";
            case this.SPANISH_MEXICO:
                return "Spanish (Mexico)";
            case this.SPANISH_NICARAGUA:
                return "Spanish (Nicaragua)";
            case this.SPANISH_PANAMA:
                return "Spanish (Panama)";
            case this.SPANISH_PARAGUAY:
                return "Spanish (Paraguay)";
            case this.SPANISH_PERU:
                return "Spanish (Peru)";
            case this.SPANISH_PUERTO_RICO:
                return "Spanish (Puerto Rico)";
            case this.SPANISH_TRADITIONAL_SORT:
                return "Spanish (Traditional Sort)";
            case this.SPANISH_INTERNATIONAL_SORT:
                return "Spanish (International Sort)";
            case this.SPANISH_URUGUAY:
                return "Spanish (Uruguay)";
            case this.SPANISH_VENEZUELA:
                return "Spanish (Venezuela)";
            case this.SWAHILI:
                return "Swahili";
            case this.SWEDISH:
                return "Swedish";
            case this.SWEDISH_FINLAND:
                return "Swedish (Finland)";
            case this.SYRIAC:
                return "Syriac";
            case this.TAMIL:
                return "Tamil";
            case this.TATAR:
                return "Tatar";
            case this.TELUGU:
                return "Telugu";
            case this.THAI_THAILAND:
                return "Thai (Thailand)";
            case this.TURKISH:
                return "Turkish";
            case this.TAJIK_CYRILLIC:
                return "Tajik (Cyrillic)";
            case this.TURKMEN:
                return "Turkmen";
            case this.UKRAINIAN:
                return "Ukrainian";
            case this.URDU:
                return "Urdu";
            case this.UZBEK_CYRILIC:
                return "Uzbek (Cyrillic)";
            case this.UZBEK_LATIN:
                return "Uzbek (Latin)";
            case this.VIETNAMESE:
                return "Vietnamese";
            case this.CTC_SIMPLIFIED:
                return "CTC Simplified";
            case this.CTC_TRADITIONAL:
                return "CTC Traditional";
            default:
                return value.toString();
        }
    }
};
export var PKDResourceType = {
    CERTIFICATE_PA: 0,
    CERTIFICATE_TA: 1,
    LDIF: 2,
    CRL: 3,
    ML: 4,
    DEFL: 5,
    DEVL: 6,
    BL: 7,
    getType: function (value) {
        switch (value) {
            case "pa":
                return this.CERTIFICATE_PA;
            case "ta":
                return this.CERTIFICATE_TA;
            case "ldif":
                return this.LDIF;
            case "crl":
                return this.CRL;
            case "ml":
                return this.ML;
            case "defl":
                return this.DEFL;
            case "devl":
                return this.DEVL;
            case "bl":
                return this.BL;
            default:
                return this.CERTIFICATE_PA;
        }
    }
};
export var ProcessingFinishedStatus = {
    NOT_READY: 0,
    READY: 1,
    TIMEOUT: 2,
};
export var RGLMeasureSystem = {
    METRIC: 0,
    IMPERIAL: 1,
};
export var ScenarioIdentifier = {
    SCENARIO_MRZ: "Mrz",
    SCENARIO_BARCODE: "Barcode",
    SCENARIO_LOCATE: "Locate",
    SCENARIO_OCR: "Ocr",
    SCENARIO_DOCTYPE: "DocType",
    SCENARIO_MRZ_OR_BARCODE: "MrzOrBarcode",
    SCENARIO_MRZ_OR_LOCATE: "MrzOrLocate",
    SCENARIO_MRZ_AND_LOCATE: "MrzAndLocate",
    SCENARIO_MRZ_OR_OCR: "MrzOrOcr",
    SCENARIO_MRZ_OR_BARCODE_OR_OCR: "MrzOrBarcodeOrOcr",
    SCENARIO_LOCATE_VISUAL_AND_MRZ_OR_OCR: "LocateVisual_And_MrzOrOcr",
    SCENARIO_FULL_PROCESS: "FullProcess",
    SCENARIO_FULL_AUTH: "FullAuth",
    SCENARIO_ID3RUS: "Id3Rus",
    SCENARIO_RUS_STAMP: "RusStamp",
    SCENARIO_OCR_FREE: "OcrFree",
    SCENARIO_CREDIT_CARD: "CreditCard",
    SCENARIO_CAPTURE: "Capture",
};
export var LineCap = {
    Butt: 0,
    Round: 1,
    Square: 2,
};
export var UIInterfaceOrientationMask = {
    Portrait: 0,
    LandscapeLeft: 1,
    LandscapeRight: 2,
    PortraitUpsideDown: 3,
    Landscape: 4,
    All: 5,
    AllButUpsideDown: 6,
};
export var AVCaptureSessionPreset = {
    Low: 0,
    Medium: 1,
    High: 2,
    Photo: 3,
    InputPriority: 4,
    QHD960x540: 5,
    Hd1280x720: 6,
    Hd1920x1080: 7,
    Hd4K3840x2160: 8,
    IFrame960x540: 9,
    IFrame1280x720: 10,
    Qvga320x240: 11,
    Vga640x480: 12,
    Cif352x288: 13,
};
export var AVCaptureDevicePosition = {
    Front: 0,
    Back: 1,
    Unspecified: 2,
};
export var UIViewContentMode = {
    ScaleToFill: 0,
    ScaleAspectFit: 1,
    ScaleAspectFill: 2,
    Redraw: 3,
    Center: 4,
    Top: 5,
    Bottom: 6,
    Left: 7,
    Right: 8,
    TopLeft: 9,
    TopRight: 10,
    BottomLeft: 11,
    BottomRight: 12,
};
export var Enum = {
    BarcodeResult: BarcodeResult,
    BarcodeType: BarcodeType,
    CameraMode: CameraMode,
    CameraTypes: CameraTypes,
    CaptureMode: CaptureMode,
    diDocType: diDocType,
    DocFormat: DocFormat,
    DocReaderAction: DocReaderAction,
    DocReaderFrame: DocReaderFrame,
    DocReaderOrientation: DocReaderOrientation,
    eCheckDiagnose: eCheckDiagnose,
    eCheckResult: eCheckResult,
    eGraphicFieldType: eGraphicFieldType,
    eImageQualityCheckType: eImageQualityCheckType,
    eProcessGLCommands: eProcessGLCommands,
    eRequestCommand: eRequestCommand,
    eRFID_AccessControl_ProcedureType: eRFID_AccessControl_ProcedureType,
    eRFID_AuthenticationProcedureType: eRFID_AuthenticationProcedureType,
    eRFID_BaudRate: eRFID_BaudRate,
    eRFID_CertificateType: eRFID_CertificateType,
    eRFID_DataFile_Type: eRFID_DataFile_Type,
    eRFID_NotificationAndErrorCodes: eRFID_NotificationAndErrorCodes,
    eRFID_Password_Type: eRFID_Password_Type,
    eRFID_SDK_ProfilerType: eRFID_SDK_ProfilerType,
    eRFID_TerminalType: eRFID_TerminalType,
    eRPRM_Authenticity: eRPRM_Authenticity,
    eRPRM_FieldVerificationResult: eRPRM_FieldVerificationResult,
    eRPRM_Lights: eRPRM_Lights,
    eRPRM_ResultType: eRPRM_ResultType,
    eRPRM_SecurityFeatureType: eRPRM_SecurityFeatureType,
    eSignManagementAction: eSignManagementAction,
    eVisualFieldType: eVisualFieldType,
    FontStyle: FontStyle,
    FrameShapeType: FrameShapeType,
    LCID: LCID,
    PKDResourceType: PKDResourceType,
    ProcessingFinishedStatus: ProcessingFinishedStatus,
    RGLMeasureSystem: RGLMeasureSystem,
    ScenarioIdentifier: ScenarioIdentifier,
    LineCap: LineCap,
    UIInterfaceOrientationMask: UIInterfaceOrientationMask,
    AVCaptureSessionPreset: AVCaptureSessionPreset,
    AVCaptureDevicePosition: AVCaptureDevicePosition,
    UIViewContentMode: UIViewContentMode,
};
var DocumentReader = /** @class */ (function (_super) {
    __extends(DocumentReader, _super);
    function DocumentReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentReader.prototype.getAPIVersion = function () { return cordova(this, "getAPIVersion", {}, arguments); };
    DocumentReader.prototype.getAvailableScenarios = function () { return cordova(this, "getAvailableScenarios", {}, arguments); };
    DocumentReader.prototype.isRFIDAvailableForUse = function () { return cordova(this, "isRFIDAvailableForUse", {}, arguments); };
    DocumentReader.prototype.getCoreMode = function () { return cordova(this, "getCoreMode", {}, arguments); };
    DocumentReader.prototype.getCoreVersion = function () { return cordova(this, "getCoreVersion", {}, arguments); };
    DocumentReader.prototype.getDatabaseDate = function () { return cordova(this, "getDatabaseDate", {}, arguments); };
    DocumentReader.prototype.getDatabaseID = function () { return cordova(this, "getDatabaseID", {}, arguments); };
    DocumentReader.prototype.getDatabaseVersion = function () { return cordova(this, "getDatabaseVersion", {}, arguments); };
    DocumentReader.prototype.getDocumentReaderIsReady = function () { return cordova(this, "getDocumentReaderIsReady", {}, arguments); };
    DocumentReader.prototype.getDocumentReaderStatus = function () { return cordova(this, "getDocumentReaderStatus", {}, arguments); };
    DocumentReader.prototype.getDatabaseCountriesNumber = function () { return cordova(this, "getDatabaseCountriesNumber", {}, arguments); };
    DocumentReader.prototype.getDatabaseDocumentsNumber = function () { return cordova(this, "getDatabaseDocumentsNumber", {}, arguments); };
    DocumentReader.prototype.selectedScenario = function () { return cordova(this, "selectedScenario", {}, arguments); };
    DocumentReader.prototype.getSessionLogFolder = function () { return cordova(this, "getSessionLogFolder", {}, arguments); };
    DocumentReader.prototype.getDatabaseDescription = function () { return cordova(this, "getDatabaseDescription", {}, arguments); };
    DocumentReader.prototype.showScanner = function () { return cordova(this, "showScanner", { "observable": true }, arguments); };
    DocumentReader.prototype.startNewPage = function () { return cordova(this, "startNewPage", {}, arguments); };
    DocumentReader.prototype.startNewSession = function () { return cordova(this, "startNewSession", {}, arguments); };
    DocumentReader.prototype.startRFIDReader = function () { return cordova(this, "startRFIDReader", { "observable": true }, arguments); };
    DocumentReader.prototype.stopRFIDReader = function () { return cordova(this, "stopRFIDReader", {}, arguments); };
    DocumentReader.prototype.stopScanner = function () { return cordova(this, "stopScanner", {}, arguments); };
    DocumentReader.prototype.deinitializeReader = function () { return cordova(this, "deinitializeReader", {}, arguments); };
    DocumentReader.prototype.isAuthenticatorAvailableForUse = function () { return cordova(this, "isAuthenticatorAvailableForUse", {}, arguments); };
    DocumentReader.prototype.getConfig = function () { return cordova(this, "getConfig", {}, arguments); };
    DocumentReader.prototype.getRfidScenario = function () { return cordova(this, "getRfidScenario", {}, arguments); };
    DocumentReader.prototype.getLicenseExpiryDate = function () { return cordova(this, "getLicenseExpiryDate", {}, arguments); };
    DocumentReader.prototype.getLicenseCountryFilter = function () { return cordova(this, "getLicenseCountryFilter", {}, arguments); };
    DocumentReader.prototype.licenseIsRfidAvailable = function () { return cordova(this, "licenseIsRfidAvailable", {}, arguments); };
    DocumentReader.prototype.getCameraSessionIsPaused = function () { return cordova(this, "getCameraSessionIsPaused", {}, arguments); };
    DocumentReader.prototype.removeDatabase = function () { return cordova(this, "removeDatabase", {}, arguments); };
    DocumentReader.prototype.cancelDBUpdate = function () { return cordova(this, "cancelDBUpdate", {}, arguments); };
    DocumentReader.prototype.resetConfiguration = function () { return cordova(this, "resetConfiguration", {}, arguments); };
    DocumentReader.prototype.clearPKDCertificates = function () { return cordova(this, "clearPKDCertificates", {}, arguments); };
    DocumentReader.prototype.readRFID = function () { return cordova(this, "readRFID", { "observable": true }, arguments); };
    DocumentReader.prototype.getRfidSessionStatus = function () { return cordova(this, "getRfidSessionStatus", {}, arguments); };
    DocumentReader.prototype.setEnableCoreLogs = function (arg0) { return cordova(this, "setEnableCoreLogs", {}, arguments); };
    DocumentReader.prototype.addPKDCertificates = function (arg0) { return cordova(this, "addPKDCertificates", {}, arguments); };
    DocumentReader.prototype.setCameraSessionIsPaused = function (arg0) { return cordova(this, "setCameraSessionIsPaused", {}, arguments); };
    DocumentReader.prototype.getScenario = function (arg0) { return cordova(this, "getScenario", {}, arguments); };
    DocumentReader.prototype.recognizeImages = function (arg0) { return cordova(this, "recognizeImages", { "observable": true }, arguments); };
    DocumentReader.prototype.showScannerWithCameraID = function (arg0) { return cordova(this, "showScannerWithCameraID", { "observable": true }, arguments); };
    DocumentReader.prototype.runAutoUpdate = function (arg0) { return cordova(this, "runAutoUpdate", { "observable": true }, arguments); };
    DocumentReader.prototype.setConfig = function (arg0) { return cordova(this, "setConfig", {}, arguments); };
    DocumentReader.prototype.setRfidScenario = function (arg0) { return cordova(this, "setRfidScenario", {}, arguments); };
    DocumentReader.prototype.initializeReader = function (arg0) { return cordova(this, "initializeReader", {}, arguments); };
    DocumentReader.prototype.initializeReaderWithDatabasePath = function (arg0, arg1) { return cordova(this, "initializeReaderWithDatabasePath", {}, arguments); };
    DocumentReader.prototype.prepareDatabase = function (arg0) { return cordova(this, "prepareDatabase", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImage = function (arg0) { return cordova(this, "recognizeImage", { "observable": true }, arguments); };
    DocumentReader.prototype.setRfidSessionStatus = function (arg0) { return cordova(this, "setRfidSessionStatus", {}, arguments); };
    DocumentReader.prototype.recognizeImageFrame = function (arg0, arg1) { return cordova(this, "recognizeImageFrame", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImageWithOpts = function (arg0, arg1) { return cordova(this, "recognizeImageWithOpts", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeVideoFrame = function (arg0, arg1) { return cordova(this, "recognizeVideoFrame", { "observable": true }, arguments); };
    DocumentReader.prototype.showScannerWithCameraIDAndOpts = function (arg0, arg1) { return cordova(this, "showScannerWithCameraIDAndOpts", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImageWithImageInputParams = function (arg0, arg1) { return cordova(this, "recognizeImageWithImageInputParams", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImageWithCameraMode = function (arg0, arg1) { return cordova(this, "recognizeImageWithCameraMode", { "observable": true }, arguments); };
    DocumentReader.pluginName = "DocumentReader";
    DocumentReader.plugin = "cordova-plugin-document-reader-api";
    DocumentReader.pluginRef = "DocumentReader";
    DocumentReader.repo = "https://github.com/regulaforensics/DocumentReader-Cordova-Plugin";
    DocumentReader.platforms = ["Android", "iOS"];
    DocumentReader = __decorate([
        Injectable()
    ], DocumentReader);
    return DocumentReader;
}(IonicNativePlugin));
export { DocumentReader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXJlYWRlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBb0J6QixpQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzlCLElBQUksVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQTtRQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQTtRQUUzQixNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDNUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQzFELE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUMxRCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLGdDQUFnQyxHQUFHLFVBQVUsQ0FBQyxr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QzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsd0JBQXdCLEVBQUUsR0FBRztJQUM3QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hC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Q0FBc0IsYUFBQyxJQUFTLEVBQUUsSUFBUztJQUczQyw0Q0FBbUIsYUFBQyxJQUFTLEVBQUUsSUFBUztJQUd4Qyx1REFBOEIsYUFBQyxJQUFTLEVBQUUsSUFBUztJQUduRCwyREFBa0MsYUFBQyxJQUFTLEVBQUUsSUFBUztJQUd2RCxxREFBNEIsYUFBQyxJQUFTLEVBQUUsSUFBUzs7Ozs7O0lBcEt0QyxjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBN3hLM0I7RUE2eEtvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vLyBDbGFzc2VzXG5cbmV4cG9ydCBjbGFzcyBTY2VuYXJpbyB7XG4gIGZyYW1lPzogbnVtYmVyXG4gIGZyYW1lT3JpZW50YXRpb24/OiBudW1iZXJcbiAgdXZUb3JjaD86IGJvb2xlYW5cbiAgYmFyY29kZUV4dD86IGJvb2xlYW5cbiAgZmFjZUV4dD86IGJvb2xlYW5cbiAgbXVsdGlQYWdlT2ZmPzogYm9vbGVhblxuICBzZXJpZXNQcm9jZXNzTW9kZT86IGJvb2xlYW5cbiAgZnJhbWVLV0hMYW5kc2NhcGU/OiBudW1iZXJcbiAgZnJhbWVLV0hQb3J0cmFpdD86IG51bWJlclxuICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRQb3J0cmFpdD86IG51bWJlclxuICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGU/OiBudW1iZXJcbiAgbmFtZT86IHN0cmluZ1xuICBjYXB0aW9uPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTY2VuYXJpbyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2NlbmFyaW9cblxuICAgIHJlc3VsdC5mcmFtZSA9IGpzb25PYmplY3RbXCJmcmFtZVwiXVxuICAgIHJlc3VsdC5mcmFtZU9yaWVudGF0aW9uID0ganNvbk9iamVjdFtcImZyYW1lT3JpZW50YXRpb25cIl1cbiAgICByZXN1bHQudXZUb3JjaCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoXCJdXG4gICAgcmVzdWx0LmJhcmNvZGVFeHQgPSBqc29uT2JqZWN0W1wiYmFyY29kZUV4dFwiXVxuICAgIHJlc3VsdC5mYWNlRXh0ID0ganNvbk9iamVjdFtcImZhY2VFeHRcIl1cbiAgICByZXN1bHQubXVsdGlQYWdlT2ZmID0ganNvbk9iamVjdFtcIm11bHRpUGFnZU9mZlwiXVxuICAgIHJlc3VsdC5zZXJpZXNQcm9jZXNzTW9kZSA9IGpzb25PYmplY3RbXCJzZXJpZXNQcm9jZXNzTW9kZVwiXVxuICAgIHJlc3VsdC5mcmFtZUtXSExhbmRzY2FwZSA9IGpzb25PYmplY3RbXCJmcmFtZUtXSExhbmRzY2FwZVwiXVxuICAgIHJlc3VsdC5mcmFtZUtXSFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIUG9ydHJhaXRcIl1cbiAgICByZXN1bHQuZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXRcIl1cbiAgICByZXN1bHQuZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlID0ganNvbk9iamVjdFtcImZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZVwiXVxuICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICByZXN1bHQuY2FwdGlvbiA9IGpzb25PYmplY3RbXCJjYXB0aW9uXCJdXG4gICAgcmVzdWx0LmRlc2NyaXB0aW9uID0ganNvbk9iamVjdFtcImRlc2NyaXB0aW9uXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICBib3R0b20/OiBudW1iZXJcbiAgdG9wPzogbnVtYmVyXG4gIGxlZnQ/OiBudW1iZXJcbiAgcmlnaHQ/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY3Qge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlY3RcblxuICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgcmVzdWx0LnRvcCA9IGpzb25PYmplY3RbXCJ0b3BcIl1cbiAgICByZXN1bHQubGVmdCA9IGpzb25PYmplY3RbXCJsZWZ0XCJdXG4gICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHtcbiAgc291cmNlVHlwZT86IG51bWJlclxuICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgbGlnaHRUeXBlPzogbnVtYmVyXG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgbGlnaHROYW1lPzogc3RyaW5nXG4gIHZhbHVlPzogc3RyaW5nXG4gIGZpZWxkUmVjdD86IFJlY3RcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFxuXG4gICAgcmVzdWx0LnNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZVwiXVxuICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgcmVzdWx0LmxpZ2h0VHlwZSA9IGpzb25PYmplY3RbXCJsaWdodFR5cGVcIl1cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgcmVzdWx0LmxpZ2h0TmFtZSA9IGpzb25PYmplY3RbXCJsaWdodE5hbWVcIl1cbiAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICByZXN1bHQuZmllbGRSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRSZWN0XCJdKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQge1xuICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdFxuXG4gICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmZpZWxkcy5wdXNoKERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pKSAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclZhbHVlIHtcbiAgcGFnZUluZGV4PzogbnVtYmVyXG4gIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgdmFsaWRpdHk/OiBudW1iZXJcbiAgcHJvYmFiaWxpdHk/OiBudW1iZXJcbiAgdmFsdWU/OiBzdHJpbmdcbiAgb3JpZ2luYWxWYWx1ZT86IHN0cmluZ1xuICBib3VuZFJlY3Q/OiBSZWN0XG4gIGNvbXBhcmlzb24/OiBSZWNvcmQ8bnVtYmVyLCBudW1iZXI+XG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbHVlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclZhbHVlXG5cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICByZXN1bHQudmFsaWRpdHkgPSBqc29uT2JqZWN0W1widmFsaWRpdHlcIl1cbiAgICByZXN1bHQucHJvYmFiaWxpdHkgPSBqc29uT2JqZWN0W1wicHJvYmFiaWxpdHlcIl1cbiAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICByZXN1bHQub3JpZ2luYWxWYWx1ZSA9IGpzb25PYmplY3RbXCJvcmlnaW5hbFZhbHVlXCJdXG4gICAgcmVzdWx0LmJvdW5kUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImJvdW5kUmVjdFwiXSlcbiAgICByZXN1bHQuY29tcGFyaXNvbiA9IHt9XG4gICAgaWYgKGpzb25PYmplY3RbXCJjb21wYXJpc29uXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbk9iamVjdFtcImNvbXBhcmlzb25cIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25baV0gPSBqc29uT2JqZWN0W1wiY29tcGFyaXNvblwiXVtpXSAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclRleHRGaWVsZCB7XG4gIGZpZWxkVHlwZT86IG51bWJlclxuICBsY2lkPzogbnVtYmVyXG4gIHN0YXR1cz86IG51bWJlclxuICBsY2lkTmFtZT86IHN0cmluZ1xuICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgdmFsdWU/OiBEb2N1bWVudFJlYWRlclZhbHVlXG4gIHZhbHVlcz86IERvY3VtZW50UmVhZGVyVmFsdWVbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkXG5cbiAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuICAgIHJlc3VsdC5sY2lkID0ganNvbk9iamVjdFtcImxjaWRcIl1cbiAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgIHJlc3VsdC5sY2lkTmFtZSA9IGpzb25PYmplY3RbXCJsY2lkTmFtZVwiXVxuICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgcmVzdWx0LnZhbHVlID0gRG9jdW1lbnRSZWFkZXJWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsdWVcIl0pXG4gICAgcmVzdWx0LnZhbHVlcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJ2YWx1ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ2YWx1ZXNcIl0pIHtcbiAgICAgICAgcmVzdWx0LnZhbHVlcy5wdXNoKERvY3VtZW50UmVhZGVyVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlc1wiXVtpXSkpICAgICAgfSAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB7XG4gIHN0YXR1cz86IG51bWJlclxuICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlclRleHRGaWVsZFtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclRleHRSZXN1bHQge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdFxuXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpZWxkc1wiXSkge1xuICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSkpICAgICAgfSAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGUge1xuICB4PzogbnVtYmVyXG4gIHk/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENvb3JkaW5hdGUge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IENvb3JkaW5hdGVcblxuICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICByZXN1bHQueSA9IGpzb25PYmplY3RbXCJ5XCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnRQb3NpdGlvbiB7XG4gIGRvY0Zvcm1hdD86IG51bWJlclxuICB3aWR0aD86IG51bWJlclxuICBoZWlnaHQ/OiBudW1iZXJcbiAgZHBpPzogbnVtYmVyXG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBpbnZlcnNlPzogbnVtYmVyXG4gIHBlcnNwZWN0aXZlVHI/OiBudW1iZXJcbiAgb2JqQXJlYT86IG51bWJlclxuICBvYmpJbnRBbmdsZURldj86IG51bWJlclxuICByZXN1bHRTdGF0dXM/OiBudW1iZXJcbiAgYW5nbGU/OiBudW1iZXJcbiAgY2VudGVyPzogQ29vcmRpbmF0ZVxuICBsZWZ0VG9wPzogQ29vcmRpbmF0ZVxuICBsZWZ0Qm90dG9tPzogQ29vcmRpbmF0ZVxuICByaWdodFRvcD86IENvb3JkaW5hdGVcbiAgcmlnaHRCb3R0b20/OiBDb29yZGluYXRlXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFbGVtZW50UG9zaXRpb24ge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEVsZW1lbnRQb3NpdGlvblxuXG4gICAgcmVzdWx0LmRvY0Zvcm1hdCA9IGpzb25PYmplY3RbXCJkb2NGb3JtYXRcIl1cbiAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgIHJlc3VsdC5kcGkgPSBqc29uT2JqZWN0W1wiZHBpXCJdXG4gICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICByZXN1bHQuaW52ZXJzZSA9IGpzb25PYmplY3RbXCJpbnZlcnNlXCJdXG4gICAgcmVzdWx0LnBlcnNwZWN0aXZlVHIgPSBqc29uT2JqZWN0W1wicGVyc3BlY3RpdmVUclwiXVxuICAgIHJlc3VsdC5vYmpBcmVhID0ganNvbk9iamVjdFtcIm9iakFyZWFcIl1cbiAgICByZXN1bHQub2JqSW50QW5nbGVEZXYgPSBqc29uT2JqZWN0W1wib2JqSW50QW5nbGVEZXZcIl1cbiAgICByZXN1bHQucmVzdWx0U3RhdHVzID0ganNvbk9iamVjdFtcInJlc3VsdFN0YXR1c1wiXVxuICAgIHJlc3VsdC5hbmdsZSA9IGpzb25PYmplY3RbXCJhbmdsZVwiXVxuICAgIHJlc3VsdC5jZW50ZXIgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZW50ZXJcIl0pXG4gICAgcmVzdWx0LmxlZnRUb3AgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJsZWZ0VG9wXCJdKVxuICAgIHJlc3VsdC5sZWZ0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdEJvdHRvbVwiXSlcbiAgICByZXN1bHQucmlnaHRUb3AgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyaWdodFRvcFwiXSlcbiAgICByZXN1bHQucmlnaHRCb3R0b20gPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyaWdodEJvdHRvbVwiXSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRdWFsaXR5IHtcbiAgZmVhdHVyZVR5cGU/OiBudW1iZXJcbiAgcmVzdWx0PzogbnVtYmVyXG4gIHR5cGU/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5XG5cbiAgICByZXN1bHQuZmVhdHVyZVR5cGUgPSBqc29uT2JqZWN0W1wiZmVhdHVyZVR5cGVcIl1cbiAgICByZXN1bHQucmVzdWx0ID0ganNvbk9iamVjdFtcInJlc3VsdFwiXVxuICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRdWFsaXR5R3JvdXAge1xuICBjb3VudD86IG51bWJlclxuICByZXN1bHQ/OiBudW1iZXJcbiAgaW1hZ2VRdWFsaXR5TGlzdD86IEltYWdlUXVhbGl0eVtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHlHcm91cCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5R3JvdXBcblxuICAgIHJlc3VsdC5jb3VudCA9IGpzb25PYmplY3RbXCJjb3VudFwiXVxuICAgIHJlc3VsdC5yZXN1bHQgPSBqc29uT2JqZWN0W1wicmVzdWx0XCJdXG4gICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl0pIHtcbiAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QucHVzaChJbWFnZVF1YWxpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl1baV0pKSAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZSB7XG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBkb2N1bWVudElEPzogbnVtYmVyXG4gIGRUeXBlPzogbnVtYmVyXG4gIGRGb3JtYXQ/OiBudW1iZXJcbiAgZE1SWj86IGJvb2xlYW5cbiAgbmFtZT86IHN0cmluZ1xuICBJQ0FPQ29kZT86IHN0cmluZ1xuICBkRGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZFllYXI/OiBzdHJpbmdcbiAgZENvdW50cnlOYW1lPzogc3RyaW5nXG4gIEZEU0lEPzogbnVtYmVyW11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVxuXG4gICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICByZXN1bHQuZG9jdW1lbnRJRCA9IGpzb25PYmplY3RbXCJkb2N1bWVudElEXCJdXG4gICAgcmVzdWx0LmRUeXBlID0ganNvbk9iamVjdFtcImRUeXBlXCJdXG4gICAgcmVzdWx0LmRGb3JtYXQgPSBqc29uT2JqZWN0W1wiZEZvcm1hdFwiXVxuICAgIHJlc3VsdC5kTVJaID0ganNvbk9iamVjdFtcImRNUlpcIl1cbiAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgcmVzdWx0LklDQU9Db2RlID0ganNvbk9iamVjdFtcIklDQU9Db2RlXCJdXG4gICAgcmVzdWx0LmREZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkRGVzY3JpcHRpb25cIl1cbiAgICByZXN1bHQuZFllYXIgPSBqc29uT2JqZWN0W1wiZFllYXJcIl1cbiAgICByZXN1bHQuZENvdW50cnlOYW1lID0ganNvbk9iamVjdFtcImRDb3VudHJ5TmFtZVwiXVxuICAgIHJlc3VsdC5GRFNJRCA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJGRFNJRFwiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIkZEU0lEXCJdKSB7XG4gICAgICAgIHJlc3VsdC5GRFNJRC5wdXNoKGpzb25PYmplY3RbXCJGRFNJRFwiXVtpXSkgICAgICB9ICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24ge1xuICBjb2RlPzogbnVtYmVyXG4gIHZhbHVlPzogbnVtYmVyXG4gIG51bWJlcj86IG51bWJlclxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24ge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uXG5cbiAgICByZXN1bHQuY29kZSA9IGpzb25PYmplY3RbXCJjb2RlXCJdXG4gICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgcmVzdWx0Lm51bWJlciA9IGpzb25PYmplY3RbXCJudW1iZXJcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUge1xuICBhY3RpdmVPcHRpb25JZHg/OiBudW1iZXJcbiAgdHlwZT86IG51bWJlclxuICBzdGF0dXM/OiBudW1iZXJcbiAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGVcblxuICAgIHJlc3VsdC5hY3RpdmVPcHRpb25JZHggPSBqc29uT2JqZWN0W1wiYWN0aXZlT3B0aW9uSWR4XCJdXG4gICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSkgICAgICB9ICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZURhdGEge1xuICBsZW5ndGg/OiBudW1iZXJcbiAgdHlwZT86IG51bWJlclxuICBzdGF0dXM/OiBudW1iZXJcbiAgZGF0YT86IHN0cmluZ1xuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsZURhdGEge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVEYXRhXG5cbiAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VydGlmaWNhdGVEYXRhIHtcbiAgbGVuZ3RoPzogbnVtYmVyXG4gIGRhdGE/OiBzdHJpbmdcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENlcnRpZmljYXRlRGF0YSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2VydGlmaWNhdGVEYXRhXG5cbiAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMge1xuICBzZWN1cml0eU9iamVjdD86IENlcnRpZmljYXRlRGF0YVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzXG5cbiAgICByZXN1bHQuc2VjdXJpdHlPYmplY3QgPSBDZXJ0aWZpY2F0ZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0XCJdKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlIHtcbiAgcmVhZGluZ1RpbWU/OiBudW1iZXJcbiAgdHlwZT86IG51bWJlclxuICBwQVN0YXR1cz86IG51bWJlclxuICByZWFkaW5nU3RhdHVzPzogbnVtYmVyXG4gIGZpbGVJRD86IHN0cmluZ1xuICBmaWxlRGF0YT86IEZpbGVEYXRhXG4gIGNlcnRpZmljYXRlcz86IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzXG4gIGRvY0ZpZWxkc1RleHQ/OiBudW1iZXJbXVxuICBkb2NGaWVsZHNHcmFwaGljcz86IG51bWJlcltdXG4gIGRvY0ZpZWxkc09yaWdpbmFscz86IG51bWJlcltdXG4gIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsZSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRmlsZVxuXG4gICAgcmVzdWx0LnJlYWRpbmdUaW1lID0ganNvbk9iamVjdFtcInJlYWRpbmdUaW1lXCJdXG4gICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgIHJlc3VsdC5wQVN0YXR1cyA9IGpzb25PYmplY3RbXCJwQVN0YXR1c1wiXVxuICAgIHJlc3VsdC5yZWFkaW5nU3RhdHVzID0ganNvbk9iamVjdFtcInJlYWRpbmdTdGF0dXNcIl1cbiAgICByZXN1bHQuZmlsZUlEID0ganNvbk9iamVjdFtcImZpbGVJRFwiXVxuICAgIHJlc3VsdC5maWxlRGF0YSA9IEZpbGVEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlRGF0YVwiXSlcbiAgICByZXN1bHQuY2VydGlmaWNhdGVzID0gU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlc1wiXSlcbiAgICByZXN1bHQuZG9jRmllbGRzVGV4dCA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXSkge1xuICAgICAgICByZXN1bHQuZG9jRmllbGRzVGV4dC5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdW2ldKSAgICAgIH0gICAgfVxuICAgIHJlc3VsdC5kb2NGaWVsZHNHcmFwaGljcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNHcmFwaGljcy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXVtpXSkgICAgICB9ICAgIH1cbiAgICByZXN1bHQuZG9jRmllbGRzT3JpZ2luYWxzID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc09yaWdpbmFsc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc09yaWdpbmFsc1wiXSkge1xuICAgICAgICByZXN1bHQuZG9jRmllbGRzT3JpZ2luYWxzLnB1c2goanNvbk9iamVjdFtcImRvY0ZpZWxkc09yaWdpbmFsc1wiXVtpXSkgICAgICB9ICAgIH1cbiAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKSAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gIHR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIGFwcGxpY2F0aW9uSUQ/OiBzdHJpbmdcbiAgZGF0YUhhc2hBbGdvcml0aG0/OiBzdHJpbmdcbiAgdW5pY29kZVZlcnNpb24/OiBzdHJpbmdcbiAgdmVyc2lvbj86IHN0cmluZ1xuICBmaWxlcz86IEZpbGVbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXBwbGljYXRpb24ge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFwcGxpY2F0aW9uXG5cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQuYXBwbGljYXRpb25JRCA9IGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbklEXCJdXG4gICAgcmVzdWx0LmRhdGFIYXNoQWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRhdGFIYXNoQWxnb3JpdGhtXCJdXG4gICAgcmVzdWx0LnVuaWNvZGVWZXJzaW9uID0ganNvbk9iamVjdFtcInVuaWNvZGVWZXJzaW9uXCJdXG4gICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgIHJlc3VsdC5maWxlcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJmaWxlc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpbGVzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKEZpbGUuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVzXCJdW2ldKSkgICAgICB9ICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFsdWUge1xuICBsZW5ndGg/OiBudW1iZXJcbiAgdHlwZT86IG51bWJlclxuICBzdGF0dXM/OiBudW1iZXJcbiAgZGF0YT86IHN0cmluZ1xuICBmb3JtYXQ/OiBzdHJpbmdcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbHVlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWYWx1ZVxuXG4gICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgcmVzdWx0LmZvcm1hdCA9IGpzb25PYmplY3RbXCJmb3JtYXRcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlIHtcbiAgdHlwZT86IHN0cmluZ1xuICB2YWx1ZT86IFZhbHVlXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdHRyaWJ1dGUge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEF0dHJpYnV0ZVxuXG4gICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgIHJlc3VsdC52YWx1ZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZVwiXSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5IHtcbiAgZGF0YT86IHN0cmluZ1xuICBmcmllbmRseU5hbWU/OiBWYWx1ZVxuICBhdHRyaWJ1dGVzPzogQXR0cmlidXRlW11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEF1dGhvcml0eSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXV0aG9yaXR5XG5cbiAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgcmVzdWx0LmZyaWVuZGx5TmFtZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmcmllbmRseU5hbWVcIl0pXG4gICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pKSAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb24ge1xuICBkYXRhPzogc3RyaW5nXG4gIHR5cGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEV4dGVuc2lvbiB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRXh0ZW5zaW9uXG5cbiAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eSB7XG4gIG5vdEFmdGVyPzogVmFsdWVcbiAgbm90QmVmb3JlPzogVmFsdWVcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbGlkaXR5IHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWYWxpZGl0eVxuXG4gICAgcmVzdWx0Lm5vdEFmdGVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcIm5vdEFmdGVyXCJdKVxuICAgIHJlc3VsdC5ub3RCZWZvcmUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QmVmb3JlXCJdKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZUNoYWluIHtcbiAgb3JpZ2luPzogbnVtYmVyXG4gIHR5cGU/OiBudW1iZXJcbiAgdmVyc2lvbj86IG51bWJlclxuICBwYVN0YXR1cz86IG51bWJlclxuICBzZXJpYWxOdW1iZXI/OiBzdHJpbmdcbiAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gIHN1YmplY3RQS0FsZ29yaXRobT86IHN0cmluZ1xuICBmaWxlTmFtZT86IFZhbHVlXG4gIHZhbGlkaXR5PzogVmFsaWRpdHlcbiAgaXNzdWVyPzogQXV0aG9yaXR5XG4gIHN1YmplY3Q/OiBBdXRob3JpdHlcbiAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gIGV4dGVuc2lvbnM/OiBFeHRlbnNpb25bXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2VydGlmaWNhdGVDaGFpbiB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2VydGlmaWNhdGVDaGFpblxuXG4gICAgcmVzdWx0Lm9yaWdpbiA9IGpzb25PYmplY3RbXCJvcmlnaW5cIl1cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgIHJlc3VsdC5zZXJpYWxOdW1iZXIgPSBqc29uT2JqZWN0W1wic2VyaWFsTnVtYmVyXCJdXG4gICAgcmVzdWx0LnNpZ25hdHVyZUFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzaWduYXR1cmVBbGdvcml0aG1cIl1cbiAgICByZXN1bHQuc3ViamVjdFBLQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInN1YmplY3RQS0FsZ29yaXRobVwiXVxuICAgIHJlc3VsdC5maWxlTmFtZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlTmFtZVwiXSlcbiAgICByZXN1bHQudmFsaWRpdHkgPSBWYWxpZGl0eS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsaWRpdHlcIl0pXG4gICAgcmVzdWx0Lmlzc3VlciA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaXNzdWVyXCJdKVxuICAgIHJlc3VsdC5zdWJqZWN0ID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJzdWJqZWN0XCJdKVxuICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pICAgICAgfSAgICB9XG4gICAgcmVzdWx0LmV4dGVuc2lvbnMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmV4dGVuc2lvbnMucHVzaChFeHRlbnNpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl1baV0pKSAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaWduZXJJbmZvIHtcbiAgdmVyc2lvbj86IG51bWJlclxuICBwYVN0YXR1cz86IG51bWJlclxuICBkYXRhVG9IYXNoPzogc3RyaW5nXG4gIGRpZ2VzdEFsZ29yaXRobT86IHN0cmluZ1xuICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgc2VyaWFsTnVtYmVyPzogVmFsdWVcbiAgc2lnbmF0dXJlPzogVmFsdWVcbiAgc3ViamVjdEtleUlkZW50aWZpZXI/OiBWYWx1ZVxuICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gIHNpZ25lZEF0dHJpYnV0ZXM/OiBFeHRlbnNpb25bXVxuICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTaWduZXJJbmZvIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTaWduZXJJbmZvXG5cbiAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgcmVzdWx0LnBhU3RhdHVzID0ganNvbk9iamVjdFtcInBhU3RhdHVzXCJdXG4gICAgcmVzdWx0LmRhdGFUb0hhc2ggPSBqc29uT2JqZWN0W1wiZGF0YVRvSGFzaFwiXVxuICAgIHJlc3VsdC5kaWdlc3RBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wiZGlnZXN0QWxnb3JpdGhtXCJdXG4gICAgcmVzdWx0LnNpZ25hdHVyZUFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzaWduYXR1cmVBbGdvcml0aG1cIl1cbiAgICByZXN1bHQuc2VyaWFsTnVtYmVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInNlcmlhbE51bWJlclwiXSlcbiAgICByZXN1bHQuc2lnbmF0dXJlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25hdHVyZVwiXSlcbiAgICByZXN1bHQuc3ViamVjdEtleUlkZW50aWZpZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic3ViamVjdEtleUlkZW50aWZpZXJcIl0pXG4gICAgcmVzdWx0Lmlzc3VlciA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaXNzdWVyXCJdKVxuICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pICAgICAgfSAgICB9XG4gICAgcmVzdWx0LnNpZ25lZEF0dHJpYnV0ZXMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgcmVzdWx0LnNpZ25lZEF0dHJpYnV0ZXMucHVzaChFeHRlbnNpb24uZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl1baV0pKSAgICAgIH0gICAgfVxuICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdKSB7XG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluLnB1c2goQ2VydGlmaWNhdGVDaGFpbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXVtpXSkpICAgICAgfSAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5T2JqZWN0IHtcbiAgZmlsZVJlZmVyZW5jZT86IG51bWJlclxuICB2ZXJzaW9uPzogbnVtYmVyXG4gIG9iamVjdFR5cGU/OiBzdHJpbmdcbiAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gIHNpZ25lckluZm9zPzogU2lnbmVySW5mb1tdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWN1cml0eU9iamVjdCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VjdXJpdHlPYmplY3RcblxuICAgIHJlc3VsdC5maWxlUmVmZXJlbmNlID0ganNvbk9iamVjdFtcImZpbGVSZWZlcmVuY2VcIl1cbiAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgcmVzdWx0Lm9iamVjdFR5cGUgPSBqc29uT2JqZWN0W1wib2JqZWN0VHlwZVwiXVxuICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pICAgICAgfSAgICB9XG4gICAgcmVzdWx0LnNpZ25lckluZm9zID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl0pIHtcbiAgICAgICAgcmVzdWx0LnNpZ25lckluZm9zLnB1c2goU2lnbmVySW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl1baV0pKSAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkUHJvcGVydGllcyB7XG4gIGFUUUE/OiBudW1iZXJcbiAgYml0UmF0ZVI/OiBudW1iZXJcbiAgYml0UmF0ZVM/OiBudW1iZXJcbiAgY2hpcFR5cGVBPzogbnVtYmVyXG4gIG1pZmFyZU1lbW9yeT86IG51bWJlclxuICByZmlkVHlwZT86IG51bWJlclxuICBzQUs/OiBudW1iZXJcbiAgc3VwcG9ydDQ/OiBib29sZWFuXG4gIHN1cHBvcnRNaWZhcmU/OiBib29sZWFuXG4gIGFUUUI/OiBzdHJpbmdcbiAgYVRSPzogc3RyaW5nXG4gIGJhdWRyYXRlMT86IHN0cmluZ1xuICBiYXVkcmF0ZTI/OiBzdHJpbmdcbiAgdUlEPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYXJkUHJvcGVydGllcyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2FyZFByb3BlcnRpZXNcblxuICAgIHJlc3VsdC5hVFFBID0ganNvbk9iamVjdFtcImFUUUFcIl1cbiAgICByZXN1bHQuYml0UmF0ZVIgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVJcIl1cbiAgICByZXN1bHQuYml0UmF0ZVMgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVNcIl1cbiAgICByZXN1bHQuY2hpcFR5cGVBID0ganNvbk9iamVjdFtcImNoaXBUeXBlQVwiXVxuICAgIHJlc3VsdC5taWZhcmVNZW1vcnkgPSBqc29uT2JqZWN0W1wibWlmYXJlTWVtb3J5XCJdXG4gICAgcmVzdWx0LnJmaWRUeXBlID0ganNvbk9iamVjdFtcInJmaWRUeXBlXCJdXG4gICAgcmVzdWx0LnNBSyA9IGpzb25PYmplY3RbXCJzQUtcIl1cbiAgICByZXN1bHQuc3VwcG9ydDQgPSBqc29uT2JqZWN0W1wic3VwcG9ydDRcIl1cbiAgICByZXN1bHQuc3VwcG9ydE1pZmFyZSA9IGpzb25PYmplY3RbXCJzdXBwb3J0TWlmYXJlXCJdXG4gICAgcmVzdWx0LmFUUUIgPSBqc29uT2JqZWN0W1wiYVRRQlwiXVxuICAgIHJlc3VsdC5hVFIgPSBqc29uT2JqZWN0W1wiYVRSXCJdXG4gICAgcmVzdWx0LmJhdWRyYXRlMSA9IGpzb25PYmplY3RbXCJiYXVkcmF0ZTFcIl1cbiAgICByZXN1bHQuYmF1ZHJhdGUyID0ganNvbk9iamVjdFtcImJhdWRyYXRlMlwiXVxuICAgIHJlc3VsdC51SUQgPSBqc29uT2JqZWN0W1widUlEXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJGSURTZXNzaW9uRGF0YSB7XG4gIHRvdGFsQnl0ZXNSZWNlaXZlZD86IG51bWJlclxuICB0b3RhbEJ5dGVzU2VudD86IG51bWJlclxuICBzdGF0dXM/OiBudW1iZXJcbiAgZXh0TGVTdXBwb3J0PzogbnVtYmVyXG4gIHByb2Nlc3NUaW1lPzogbnVtYmVyXG4gIGNhcmRQcm9wZXJ0aWVzPzogQ2FyZFByb3BlcnRpZXNcbiAgc2Vzc2lvbkRhdGFTdGF0dXM/OiBSRklEU2Vzc2lvbkRhdGFTdGF0dXNcbiAgYWNjZXNzQ29udHJvbHM/OiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZVtdXG4gIGFwcGxpY2F0aW9ucz86IEFwcGxpY2F0aW9uW11cbiAgc2VjdXJpdHlPYmplY3RzPzogU2VjdXJpdHlPYmplY3RbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNlc3Npb25EYXRhIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEU2Vzc2lvbkRhdGFcblxuICAgIHJlc3VsdC50b3RhbEJ5dGVzUmVjZWl2ZWQgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1JlY2VpdmVkXCJdXG4gICAgcmVzdWx0LnRvdGFsQnl0ZXNTZW50ID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNTZW50XCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQuZXh0TGVTdXBwb3J0ID0ganNvbk9iamVjdFtcImV4dExlU3VwcG9ydFwiXVxuICAgIHJlc3VsdC5wcm9jZXNzVGltZSA9IGpzb25PYmplY3RbXCJwcm9jZXNzVGltZVwiXVxuICAgIHJlc3VsdC5jYXJkUHJvcGVydGllcyA9IENhcmRQcm9wZXJ0aWVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJjYXJkUHJvcGVydGllc1wiXSlcbiAgICByZXN1bHQuc2Vzc2lvbkRhdGFTdGF0dXMgPSBSRklEU2Vzc2lvbkRhdGFTdGF0dXMuZnJvbUpzb24oanNvbk9iamVjdFtcInNlc3Npb25EYXRhU3RhdHVzXCJdKVxuICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFjY2Vzc0NvbnRyb2xzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scy5wdXNoKEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXVtpXSkpICAgICAgfSAgICB9XG4gICAgcmVzdWx0LmFwcGxpY2F0aW9ucyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucy5wdXNoKEFwcGxpY2F0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl1baV0pKSAgICAgIH0gICAgfVxuICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RzXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMucHVzaChTZWN1cml0eU9iamVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RzXCJdW2ldKSkgICAgICB9ICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjayB7XG4gIHR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIHR5cGVOYW1lPzogc3RyaW5nXG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBlbGVtZW50cz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrXG5cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5lbGVtZW50cyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImVsZW1lbnRzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5lbGVtZW50cy5wdXNoKERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZWxlbWVudHNcIl1baV0pKSAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQREY0MTdJbmZvIHtcbiAgZXJyb3JMZXZlbD86IG51bWJlclxuICBjb2x1bW5zPzogbnVtYmVyXG4gIHJvd3M/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBERjQxN0luZm8ge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFBERjQxN0luZm9cblxuICAgIHJlc3VsdC5lcnJvckxldmVsID0ganNvbk9iamVjdFtcImVycm9yTGV2ZWxcIl1cbiAgICByZXN1bHQuY29sdW1ucyA9IGpzb25PYmplY3RbXCJjb2x1bW5zXCJdXG4gICAgcmVzdWx0LnJvd3MgPSBqc29uT2JqZWN0W1wicm93c1wiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEU2Vzc2lvbkRhdGFTdGF0dXMge1xuICBBQT86IG51bWJlclxuICBCQUM/OiBudW1iZXJcbiAgQ0E/OiBudW1iZXJcbiAgUEE/OiBudW1iZXJcbiAgUEFDRT86IG51bWJlclxuICBUQT86IG51bWJlclxuICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSRklEU2Vzc2lvbkRhdGFTdGF0dXMge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFJGSURTZXNzaW9uRGF0YVN0YXR1c1xuXG4gICAgcmVzdWx0LkFBID0ganNvbk9iamVjdFtcIkFBXCJdXG4gICAgcmVzdWx0LkJBQyA9IGpzb25PYmplY3RbXCJCQUNcIl1cbiAgICByZXN1bHQuQ0EgPSBqc29uT2JqZWN0W1wiQ0FcIl1cbiAgICByZXN1bHQuUEEgPSBqc29uT2JqZWN0W1wiUEFcIl1cbiAgICByZXN1bHQuUEFDRSA9IGpzb25PYmplY3RbXCJQQUNFXCJdXG4gICAgcmVzdWx0LlRBID0ganNvbk9iamVjdFtcIlRBXCJdXG4gICAgcmVzdWx0Lm92ZXJhbGxTdGF0dXMgPSBqc29uT2JqZWN0W1wib3ZlcmFsbFN0YXR1c1wiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQge1xuICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZFtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdFxuXG4gICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmZpZWxkcy5wdXNoKERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pKSAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZCB7XG4gIGJhcmNvZGVUeXBlPzogbnVtYmVyXG4gIHN0YXR1cz86IG51bWJlclxuICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgcGRmNDE3SW5mbz86IFBERjQxN0luZm9cbiAgZGF0YT86IGFueVtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRcblxuICAgIHJlc3VsdC5iYXJjb2RlVHlwZSA9IGpzb25PYmplY3RbXCJiYXJjb2RlVHlwZVwiXVxuICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICByZXN1bHQucGRmNDE3SW5mbyA9IFBERjQxN0luZm8uZnJvbUpzb24oanNvbk9iamVjdFtcInBkZjQxN0luZm9cIl0pXG4gICAgcmVzdWx0LmRhdGEgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiZGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRhdGFcIl0pIHtcbiAgICAgICAgcmVzdWx0LmRhdGEucHVzaChqc29uT2JqZWN0W1wiZGF0YVwiXVtpXSkgICAgICB9ICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQge1xuICBzdGF0dXM/OiBudW1iZXJcbiAgY2hlY2tzPzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1tdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcblxuICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgcmVzdWx0LmNoZWNrcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJjaGVja3NcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjaGVja3NcIl0pIHtcbiAgICAgICAgcmVzdWx0LmNoZWNrcy5wdXNoKERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2suZnJvbUpzb24oanNvbk9iamVjdFtcImNoZWNrc1wiXVtpXSkpICAgICAgfSAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudCB7XG4gIHN0YXR1cz86IG51bWJlclxuICBlbGVtZW50VHlwZT86IG51bWJlclxuICBlbGVtZW50RGlhZ25vc2U/OiBudW1iZXJcbiAgZWxlbWVudFR5cGVOYW1lPzogc3RyaW5nXG4gIGVsZW1lbnREaWFnbm9zZU5hbWU/OiBzdHJpbmdcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50XG5cbiAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgIHJlc3VsdC5lbGVtZW50VHlwZSA9IGpzb25PYmplY3RbXCJlbGVtZW50VHlwZVwiXVxuICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2UgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlXCJdXG4gICAgcmVzdWx0LmVsZW1lbnRUeXBlTmFtZSA9IGpzb25PYmplY3RbXCJlbGVtZW50VHlwZU5hbWVcIl1cbiAgICByZXN1bHQuZWxlbWVudERpYWdub3NlTmFtZSA9IGpzb25PYmplY3RbXCJlbGVtZW50RGlhZ25vc2VOYW1lXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQ29tcGxldGlvbiB7XG4gIGFjdGlvbj86IG51bWJlclxuICByZXN1bHRzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG4gIGVycm9yPzogVGhyb3dhYmxlXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckNvbXBsZXRpb24ge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQ29tcGxldGlvblxuXG4gICAgcmVzdWx0LmFjdGlvbiA9IGpzb25PYmplY3RbXCJhY3Rpb25cIl1cbiAgICByZXN1bHQucmVzdWx0cyA9IERvY3VtZW50UmVhZGVyUmVzdWx0cy5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVzdWx0c1wiXSlcbiAgICByZXN1bHQuZXJyb3IgPSBUaHJvd2FibGUuZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaHJvd2FibGUge1xuICBjb2RlPzogbnVtYmVyXG4gIGRvbWFpbj86IHN0cmluZ1xuICBsb2NhbGl6ZWRNZXNzYWdlPzogc3RyaW5nXG4gIG1lc3NhZ2U/OiBzdHJpbmdcbiAgc3RyaW5nPzogc3RyaW5nXG4gIHN0YWNrVHJhY2U/OiBTdGFja1RyYWNlRWxlbWVudFtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBUaHJvd2FibGUge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFRocm93YWJsZVxuXG4gICAgcmVzdWx0LmNvZGUgPSBqc29uT2JqZWN0W1wiY29kZVwiXVxuICAgIHJlc3VsdC5kb21haW4gPSBqc29uT2JqZWN0W1wiZG9tYWluXCJdXG4gICAgcmVzdWx0LmxvY2FsaXplZE1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibG9jYWxpemVkTWVzc2FnZVwiXVxuICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cbiAgICByZXN1bHQuc3RyaW5nID0ganNvbk9iamVjdFtcInN0cmluZ1wiXVxuICAgIHJlc3VsdC5zdGFja1RyYWNlID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcInN0YWNrVHJhY2VcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdKSB7XG4gICAgICAgIHJlc3VsdC5zdGFja1RyYWNlLnB1c2goU3RhY2tUcmFjZUVsZW1lbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInN0YWNrVHJhY2VcIl1baV0pKSAgICAgIH0gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGFja1RyYWNlRWxlbWVudCB7XG4gIGxpbmVOdW1iZXI/OiBudW1iZXJcbiAgaXNOYXRpdmVNZXRob2Q/OiBib29sZWFuXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBmaWxlTmFtZT86IHN0cmluZ1xuICBtZXRob2ROYW1lPzogc3RyaW5nXG4gIHN0cmluZz86IHN0cmluZ1xuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU3RhY2tUcmFjZUVsZW1lbnQge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFN0YWNrVHJhY2VFbGVtZW50XG5cbiAgICByZXN1bHQubGluZU51bWJlciA9IGpzb25PYmplY3RbXCJsaW5lTnVtYmVyXCJdXG4gICAgcmVzdWx0LmlzTmF0aXZlTWV0aG9kID0ganNvbk9iamVjdFtcImlzTmF0aXZlTWV0aG9kXCJdXG4gICAgcmVzdWx0LmNsYXNzTmFtZSA9IGpzb25PYmplY3RbXCJjbGFzc05hbWVcIl1cbiAgICByZXN1bHQuZmlsZU5hbWUgPSBqc29uT2JqZWN0W1wiZmlsZU5hbWVcIl1cbiAgICByZXN1bHQubWV0aG9kTmFtZSA9IGpzb25PYmplY3RbXCJtZXRob2ROYW1lXCJdXG4gICAgcmVzdWx0LnN0cmluZyA9IGpzb25PYmplY3RbXCJzdHJpbmdcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHtcbiAgY2hpcFBhZ2U/OiBudW1iZXJcbiAgb3ZlcmFsbFJlc3VsdD86IG51bWJlclxuICBwcm9jZXNzaW5nRmluaXNoZWRTdGF0dXM/OiBudW1iZXJcbiAgZWxhcHNlZFRpbWU/OiBudW1iZXJcbiAgZWxhcHNlZFRpbWVSRklEPzogbnVtYmVyXG4gIG1vcmVQYWdlc0F2YWlsYWJsZT86IG51bWJlclxuICByZmlkUmVzdWx0PzogbnVtYmVyXG4gIGhpZ2hSZXNvbHV0aW9uPzogYm9vbGVhblxuICBncmFwaGljUmVzdWx0PzogRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0XG4gIHRleHRSZXN1bHQ/OiBEb2N1bWVudFJlYWRlclRleHRSZXN1bHRcbiAgZG9jdW1lbnRQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvblxuICBiYXJjb2RlUG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25cbiAgbXJ6UG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25cbiAgaW1hZ2VRdWFsaXR5PzogSW1hZ2VRdWFsaXR5R3JvdXBcbiAgcmF3UmVzdWx0Pzogc3RyaW5nXG4gIGRvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uPzogRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cbiAgcmZpZFNlc3Npb25EYXRhPzogUkZJRFNlc3Npb25EYXRhXG4gIGF1dGhlbnRpY2l0eVJlc3VsdD86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0XG4gIGJhcmNvZGVSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcbiAgZG9jdW1lbnRUeXBlPzogRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGVbXVxuXG4gIGdldFRleHRGaWVsZFZhbHVlQnlUeXBlPyh7IGZpZWxkVHlwZSwgbGNpZCA9IDAsIHNvdXJjZSA9IC0xLCBvcmlnaW5hbCA9IGZhbHNlIH06IHsgZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ/OiBudW1iZXIsIHNvdXJjZT86IG51bWJlciwgb3JpZ2luYWw/OiBib29sZWFuIH0pOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudGV4dFJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmluZEJ5VHlwZUFuZExjaWQoZmllbGRUeXBlLCBsY2lkKVxyXG4gICAgaWYgKGZpZWxkID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIHNvdXJjZSlcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3JpZ2luYWwgPyB2YWx1ZS5vcmlnaW5hbFZhbHVlIDogdmFsdWUudmFsdWVcclxuICB9XHJcblxyXG4gIGdldFRleHRGaWVsZFN0YXR1c0J5VHlwZShmaWVsZFR5cGU6IG51bWJlciwgbGNpZD86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy50ZXh0UmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maW5kQnlUeXBlQW5kTGNpZChmaWVsZFR5cGUsIGxjaWQpXHJcbiAgICByZXR1cm4gZmllbGQgIT0gbnVsbCA/IGZpZWxkLnN0YXR1cyA6IDBcclxuICB9XHJcblxyXG4gIGdldEdyYXBoaWNGaWVsZEltYWdlQnlUeXBlPyh7IGZpZWxkVHlwZSwgc291cmNlID0gLTEsIGxpZ2h0ID0gLTEsIHBhZ2VJbmRleCA9IC0xIH06IHsgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZT86IG51bWJlciwgbGlnaHQ/OiBudW1iZXIsIHBhZ2VJbmRleD86IG51bWJlciB9KTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmdyYXBoaWNSZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgZm91bmRGaWVsZHMgPSBbXVxyXG5cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5ncmFwaGljUmVzdWx0LmZpZWxkcykge1xyXG4gICAgICBpZiAoZmllbGQuZmllbGRUeXBlID09PSBmaWVsZFR5cGUpIHtcclxuICAgICAgICBmb3VuZEZpZWxkcy5wdXNoKGZpZWxkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlICE9PSAtMSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGZvdW5kRmllbGRzW2ldLnNvdXJjZVR5cGUgIT09IHNvdXJjZSkge1xyXG4gICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobGlnaHQgIT09IC0xKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm91bmRGaWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZm91bmRGaWVsZHNbaV0ubGlnaHRUeXBlICE9PSBsaWdodCkge1xyXG4gICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGFnZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGZvdW5kRmllbGRzW2ldLnBhZ2VJbmRleCAhPT0gcGFnZUluZGV4KSB7XHJcbiAgICAgICAgICBmb3VuZEZpZWxkcy5zcGxpY2UoaSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm91bmRGaWVsZHMubGVuZ3RoID4gMCA/IGZvdW5kRmllbGRzWzBdLnZhbHVlIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgZ2V0UXVhbGl0eVJlc3VsdCh7IGltYWdlUXVhbGl0eUNoZWNrVHlwZSwgc2VjdXJpdHlGZWF0dXJlID0gLTEgfTogeyBpbWFnZVF1YWxpdHlDaGVja1R5cGU6IG51bWJlciwgc2VjdXJpdHlGZWF0dXJlPzogbnVtYmVyIH0pOiBudW1iZXIge1xyXG4gICAgbGV0IHJlc3VsdFN1bSA9IDJcclxuICAgIGlmICh0aGlzLmltYWdlUXVhbGl0eSA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHRTdW1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuaW1hZ2VRdWFsaXR5LmltYWdlUXVhbGl0eUxpc3QpIHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IGltYWdlUXVhbGl0eUNoZWNrVHlwZSkge1xyXG4gICAgICAgIGlmIChzZWN1cml0eUZlYXR1cmUgPT09IC0xKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGQucmVzdWx0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFN1bSA9IDBcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChmaWVsZC5yZXN1bHQgPT09IDEpe1xyXG4gICAgICAgICAgICByZXN1bHRTdW0gPSBmaWVsZC5yZXN1bHRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmZlYXR1cmVUeXBlID09PSBzZWN1cml0eUZlYXR1cmUpIHtcclxuICAgICAgICAgIHJlc3VsdFN1bSA9IGZpZWxkLnJlc3VsdFxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0U3VtXHJcbiAgfVxyXG5cclxuICBmaW5kQnlUeXBlQW5kTGNpZD8odHlwZTogbnVtYmVyLCBsY2lkOiBudW1iZXIpOiBEb2N1bWVudFJlYWRlclRleHRGaWVsZCB7XHJcbiAgICBsZXQgZmllbGRcclxuICAgIGNvbnN0IGZvdW5kRmllbGRzID0gW11cclxuXHJcbiAgICBmb3IgKGZpZWxkIG9mIHRoaXMudGV4dFJlc3VsdC5maWVsZHMpIHtcclxuICAgICAgaWYgKGZpZWxkLmZpZWxkVHlwZSA9PT0gdHlwZSkge1xyXG4gICAgICAgIGZvdW5kRmllbGRzLnB1c2goZmllbGQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChmb3VuZEZpZWxkcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmb3VuZEZpZWxkID0gbnVsbFxyXG5cclxuICAgIGZvciAoZmllbGQgb2YgZm91bmRGaWVsZHMpIHtcclxuICAgICAgaWYgKGxjaWQgPT09IDApIHtcclxuICAgICAgICBmb3VuZEZpZWxkID0gZmllbGRcclxuICAgICAgICBpZiAoZmllbGQubGNpZCA9PT0gbGNpZCkge1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZmllbGQubGNpZCA9PT0gbGNpZCkge1xyXG4gICAgICAgIHJldHVybiBmaWVsZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZvdW5kRmllbGRcclxuICB9XHJcblxyXG4gIGZpbmRCeVNvdXJjZShmaWVsZDogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQsIHNvdXJjZVR5cGU6IG51bWJlcik6IERvY3VtZW50UmVhZGVyVmFsdWUge1xyXG4gICAgbGV0IHZhbHVlXHJcbiAgICBpZiAoc291cmNlVHlwZSA9PT0gLTEpIHtcclxuICAgICAgY29uc3QgbXJ6VmFsID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIDMpXHJcbiAgICAgIGlmIChtcnpWYWwgIT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBtcnpWYWxcclxuICAgICAgfVxyXG4gICAgICB2YWx1ZSA9IHRoaXMuZmluZEJ5U291cmNlKGZpZWxkLCAxOClcclxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB2aXN1YWxWYWwgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgMTcpXHJcbiAgICAgIHJldHVybiB2aXN1YWxWYWwgIT0gbnVsbCA/IHZpc3VhbFZhbCA6IG51bGxcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBmaWVsZC52YWx1ZXMpIHtcclxuICAgICAgaWYgKGl0ZW0uc291cmNlVHlwZSA9PT0gc291cmNlVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyUmVzdWx0cyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG5cbiAgICByZXN1bHQuY2hpcFBhZ2UgPSBqc29uT2JqZWN0W1wiY2hpcFBhZ2VcIl1cbiAgICByZXN1bHQub3ZlcmFsbFJlc3VsdCA9IGpzb25PYmplY3RbXCJvdmVyYWxsUmVzdWx0XCJdXG4gICAgcmVzdWx0LnByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyA9IGpzb25PYmplY3RbXCJwcm9jZXNzaW5nRmluaXNoZWRTdGF0dXNcIl1cbiAgICByZXN1bHQuZWxhcHNlZFRpbWUgPSBqc29uT2JqZWN0W1wiZWxhcHNlZFRpbWVcIl1cbiAgICByZXN1bHQuZWxhcHNlZFRpbWVSRklEID0ganNvbk9iamVjdFtcImVsYXBzZWRUaW1lUkZJRFwiXVxuICAgIHJlc3VsdC5tb3JlUGFnZXNBdmFpbGFibGUgPSBqc29uT2JqZWN0W1wibW9yZVBhZ2VzQXZhaWxhYmxlXCJdXG4gICAgcmVzdWx0LnJmaWRSZXN1bHQgPSBqc29uT2JqZWN0W1wicmZpZFJlc3VsdFwiXVxuICAgIHJlc3VsdC5oaWdoUmVzb2x1dGlvbiA9IGpzb25PYmplY3RbXCJoaWdoUmVzb2x1dGlvblwiXVxuICAgIHJlc3VsdC5ncmFwaGljUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJncmFwaGljUmVzdWx0XCJdKVxuICAgIHJlc3VsdC50ZXh0UmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJ0ZXh0UmVzdWx0XCJdKVxuICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uID0gRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdKVxuICAgIHJlc3VsdC5iYXJjb2RlUG9zaXRpb24gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXSlcbiAgICByZXN1bHQubXJ6UG9zaXRpb24gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcIm1yelBvc2l0aW9uXCJdKVxuICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkgPSBJbWFnZVF1YWxpdHlHcm91cC5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdKVxuICAgIHJlc3VsdC5yYXdSZXN1bHQgPSBqc29uT2JqZWN0W1wicmF3UmVzdWx0XCJdXG4gICAgcmVzdWx0LmRvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uID0gRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uXCJdKVxuICAgIHJlc3VsdC5yZmlkU2Vzc2lvbkRhdGEgPSBSRklEU2Vzc2lvbkRhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRTZXNzaW9uRGF0YVwiXSlcbiAgICByZXN1bHQuYXV0aGVudGljaXR5UmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImF1dGhlbnRpY2l0eVJlc3VsdFwiXSlcbiAgICByZXN1bHQuYmFyY29kZVJlc3VsdCA9IERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYmFyY29kZVJlc3VsdFwiXSlcbiAgICByZXN1bHQuZG9jdW1lbnRUeXBlID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXSkge1xuICAgICAgICByZXN1bHQuZG9jdW1lbnRUeXBlLnB1c2goRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUuZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXVtpXSkpICAgICAgfSAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuLy8gRW51bVxuXG5leHBvcnQgY29uc3QgQmFyY29kZVJlc3VsdCA9IHtcbiAgICBOT19FUlI6IDAsXG4gICAgTlVMTF9QVFJfRVJSOiAtNjAwMSxcbiAgICBCQURfQVJHX0VSUjogLTYwMDIsXG4gICAgU0laRV9FUlI6IC02MDAzLFxuICAgIFJBTkdFX0VSUjogLTYwMDQsXG4gICAgSU5URVJOQUxfRVJSOiAtNjAwNSxcbiAgICBUUllfRVhDRVBUX0VSUjogLTYwMDYsXG4gICAgQkFSX0NPREVfTk9UX0ZPVU5EOiAtNjAwOCxcbiAgICBCQVJfQ09ERV9ERUNPREVfRVJSOiAtNjAxMCxcbiAgICBOT19VU0VSX0RMTF9GT1VORDogLTYwMTksXG4gICAgTk9fSVBQX0RMTF9GT1VORDogLTYwMjAsXG4gICAgSVBQX0VYRUNfRVJSOiAtNjAyNCxcbiAgICBJUFBfVFJZX0VYQ0VQVF9FUlI6IC02MDI1LFxuICAgIEJBUkNPREVfRVJST1JfSU5QVVRfUEFSQU06IC0xMTAwMSxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTklUOiAtMTEwMDYsXG4gICAgQkFSQ09ERV9FUlJPUl9OT1RfTE9BRF9JUF9ERUNPREVEX0xMOiAtMTEwMTIsXG4gICAgQkFSQ09ERV9FUlJPUl9JTk5FUl9QUk9CTEVNOiAtMTExMDAsXG4gICAgQkFSQ09ERV9FUlJPUl9ERUNPREVfMURfQkFEX0RFQ09ERTogLTExMjAwLFxuICAgIEJBUkNPREVfRVJST1JfRklORF9ST1dfT1JfQ09MVU1OOiAtMTEyMDEsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5EXzNYOF8yRF9YOiAtMTEyMDIsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5EXzNYOF8yRF9ZOiAtMTEyMDMsXG4gICAgQkFSQ09ERV9FUlJPUl8yRF9VR09MX01BWDogLTExMjA0LFxuICAgIEJBUkNPREVfRVJST1JfSU5ERUZJTklURUxZX0RFQ09ERUQ6IC0xMTIxMCxcbiAgICBCQVJDT0RFX0VSUk9SX0RMTF9OT1RfSU5JVDogLTExMzAwLFxuICAgIEJBUkNPREVfRVJST1JfSVBfREVDT0RFX0RMTF9UcnlfRXhjZXB0OiAtMTE0MDAsXG4gICAgSVBERUNPREVfRVJST1JfTEFSR0VFUlJPUlM6IC00NTAzLFxuICAgIElQREVDT0RFX0VSUk9SX0ZBVUxUQ09MVU1OUzogLTQ1MDQsXG4gICAgSVBERUNPREVfRVJST1JfRkFVTFRST1dTOiAtNDUwNSxcbiAgICBJUERFQ09ERV9FUlJPUl9JTkNPUlJFQ1RfRVJST1JfTEVWRUw6IC00NTExLFxuICAgIElQREVDT0RFX0VSUk9SX0xPQURJTkdfREVWX1RBQkxFOiAtNDUxMixcbn1cblxuZXhwb3J0IGNvbnN0IEJhcmNvZGVUeXBlID0ge1xuICAgIFVOS05PV046IDAsXG4gICAgQkNUX0NPREUxMjg6IDEsXG4gICAgQ09ERTM5OiAyLFxuICAgIEVBTjg6IDMsXG4gICAgSVRGOiA0LFxuICAgIFBERjQxNzogNSxcbiAgICBTVEY6IDYsXG4gICAgTVRGOiA3LFxuICAgIElBVEE6IDgsXG4gICAgQ09EQUJBUjogOSxcbiAgICBVUENBOiAxMCxcbiAgICBDT0RFOTM6IDExLFxuICAgIFVQQ0U6IDEyLFxuICAgIEVBTjEzOiAxMyxcbiAgICBRUkNPREU6IDE0LFxuICAgIEFaVEVDOiAxNSxcbiAgICBEQVRBTUFUUklYOiAxNixcbiAgICBBTExfMUQ6IDE3LFxuICAgIENPREUxMTogMTgsXG59XG5cbmV4cG9ydCBjb25zdCBDYW1lcmFNb2RlID0ge1xuICAgIEFVVE86IDAsXG4gICAgQ0FNRVJBMTogMSxcbiAgICBDQU1FUkEyOiAyLFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhVHlwZXMgPSB7XG4gICAgRlJPTlQ6IFwiZnJvbnRcIixcbiAgICBCQUNLOiBcImJhY2tcIixcbn1cblxuZXhwb3J0IGNvbnN0IENhcHR1cmVNb2RlID0ge1xuICAgIEFVVE86IDAsXG4gICAgQ0FQVFVSRV9WSURFTzogMSxcbiAgICBDQVBUVVJFX0ZSQU1FOiAyLFxufVxuXG5leHBvcnQgY29uc3QgZGlEb2NUeXBlID0ge1xuICAgIGR0Tm90RGVmaW5lZDogMCxcbiAgICBkdFBhc3Nwb3J0OiAxMSxcbiAgICBkdElkZW50aXR5Q2FyZDogMTIsXG4gICAgZHREaXBsb21hdGljUGFzc3BvcnQ6IDEzLFxuICAgIGR0U2VydmljZVBhc3Nwb3J0OiAxNCxcbiAgICBkdFNlYW1hbnNJZGVudGl0eURvY3VtZW50OiAxNSxcbiAgICBkdElkZW50aXR5Q2FyZGZvclJlc2lkZW5jZTogMTYsXG4gICAgZHRUcmF2ZWxkb2N1bWVudDogMTcsXG4gICAgZHRPdGhlcjogOTksXG4gICAgZHRWaXNhSUQyOiAyOSxcbiAgICBkdFZpc2FJRDM6IDMwLFxuICAgIGR0UmVnaXN0cmF0aW9uQ2VydGlmaWNhdGU6IDMxLFxuICAgIGR0TmF0aW9uYWxJZGVudGl0eUNhcmQ6IDIwLFxuICAgIGR0U29jaWFsSWRlbnRpdHlDYXJkOiAyMSxcbiAgICBkdEFsaWVuc0lkZW50aXR5Q2FyZDogMjIsXG4gICAgZHRQcml2aWxlZ2VkSWRlbnRpdHlDYXJkOiAyMyxcbiAgICBkdFJlc2lkZW5jZVBlcm1pdElkZW50aXR5Q2FyZDogMjQsXG4gICAgZHRPcmlnaW5DYXJkOiAyNSxcbiAgICBkdEVtZXJnZW5jeVBhc3Nwb3J0OiAyNixcbiAgICBkdEFsaWVuc1Bhc3Nwb3J0OiAyNyxcbiAgICBkdEFsdGVybmF0aXZlSWRlbnRpdHlDYXJkOiAyOCxcbiAgICBkdEF1dGhvcml6YXRpb25DYXJkOiAzMixcbiAgICBkdEJlZ2lubmVyUGVybWl0OiAzMyxcbiAgICBkdEJvcmRlckNyb3NzaW5nQ2FyZDogMzQsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlOiAzNSxcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2VVbmRlcjE4OiAzNixcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiAzNyxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMzgsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VJbmR0dWN0aW9uYWxQZXJtaXQ6IDM5LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlVW5kZXIxODogNDAsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA0MSxcbiAgICBkdENvbW1lcmNpYWxJbmR0dWN0aW9uUGVybWl0OiA0MixcbiAgICBkdENvbW1lcmNpYWxOZXdQZXJtaXQ6IDQzLFxuICAgIGR0Q29uY2VhbGVkQ2FycnlMaWNlbnNlOiA0NCxcbiAgICBkdENvbmNlYWxlZEZpcmVhcm1QZXJtaXQ6IDQ1LFxuICAgIGR0Q29uZGl0aW9uYWxEcml2aW5nTGljZW5zZTogNDYsXG4gICAgZHREZXBhcnRtZW50T2ZWZXRlcmFuc0FmZmFpcnNJZGVudGl0eUNhcmQ6IDQ3LFxuICAgIGR0RGlwbG9tYXRpY0RyaXZpbmdMaWNlbnNlOiA0OCxcbiAgICBkdERyaXZpbmdMaWNlbnNlOiA0OSxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5kdHVjdGlvbmFsUGVybWl0OiA1MCxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5kdHVjdGlvbmFsUGVybWl0VW5kZXIxODogNTEsXG4gICAgZHREcml2aW5nTGljZW5zZUluZHR1Y3Rpb25hbFBlcm1pdFVuZGVyMjE6IDUyLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdDogNTMsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0VW5kZXIxODogNTQsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0VW5kZXIyMTogNTUsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZTogNTYsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMTg6IDU3LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiA1OCxcbiAgICBkdERyaXZpbmdMaWNlbnNlUmVnaXN0ZXJlZE9mZmVuZGVyOiA1OSxcbiAgICBkdERyaXZpbmdMaWNlbnNlUmVkdGljdGVkVW5kZXIxODogNjAsXG4gICAgZHREcml2aW5nTGljZW5zZVJlZHRpY3RlZFVuZGVyMjE6IDYxLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VUZW1wb3JhcnlWaXNpdG9yOiA2MixcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvclVuZGVyMTg6IDYzLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VUZW1wb3JhcnlWaXNpdG9yVW5kZXIyMTogNjQsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMTg6IDY1LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA2NixcbiAgICBkdEVtcGxveW1lbnREcml2aW5nUGVybWl0OiA2NyxcbiAgICBkdEVuaGFuY2VkQ2hhdWZmZXVyTGljZW5zZTogNjgsXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2VVbmRlcjE4OiA2OSxcbiAgICBkdEVuaGFuY2VkQ2hhdWZmZXVyTGljZW5zZVVuZGVyMjE6IDcwLFxuICAgIGR0RW5oYW5jZWRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDcxLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZTogNzIsXG4gICAgZHRFbmhhbmNlZERyaXZpbmdMaWNlbnNlVW5kZXIxODogNzMsXG4gICAgZHRFbmhhbmNlZERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNzQsXG4gICAgZHRFbmhhbmNlZElkZW50aXR5Q2FyZDogNzUsXG4gICAgZHRFbmhhbmNlZElkZW50aXR5Q2FyZFVuZGVyMTg6IDc2LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmRVbmRlcjIxOiA3NyxcbiAgICBkdEVuaGFuY2VkT3BlcmF0b3JzTGljZW5zZTogNzgsXG4gICAgZHRGaXJlYXJtc1Blcm1pdDogNzksXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlOiA4MCxcbiAgICBkdEZ1bGxQcm92aXNpb25hbExpY2Vuc2VVbmRlcjE4OiA4MSxcbiAgICBkdEZ1bGxQcm92aXNpb25hbExpY2Vuc2VVbmRlcjIxOiA4MixcbiAgICBkdEdlbmV2YUNvbnZlbnRpb25zSWRlbnRpdHlDYXJkOiA4MyxcbiAgICBkdEdyYWR1YXRlZERyaXZpbmdMaWNlbnNlVW5kZXIxODogODQsXG4gICAgZHRHcmFkdWF0ZWREcml2aW5nTGljZW5zZVVuZGVyMjE6IDg1LFxuICAgIGR0R3JhZHVhdGVkSW5kdHVjdGlvblBlcm1pdFVuZGVyMTg6IDg2LFxuICAgIGR0R3JhZHVhdGVkSW5kdHVjdGlvblBlcm1pdFVuZGVyMjE6IDg3LFxuICAgIGR0R3JhZHVhdGVkTGljZW5zZVVuZGVyMTg6IDg4LFxuICAgIGR0R3JhZHVhdGVkTGljZW5zZVVuZGVyMjE6IDg5LFxuICAgIGR0SGFuZGd1bkNhcnJ5UGVybWl0OiA5MCxcbiAgICBkdElkZW50aXR5QW5kUHJpdmlsZWdlQ2FyZDogOTEsXG4gICAgZHRJZGVudGl0eUNhcmRNb2JpbGl0eUltcGFpcmVkOiA5MixcbiAgICBkdElkZW50aXR5Q2FyZFJlZ2lzdGVyZWRPZmZlbmRlcjogOTMsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yOiA5NCxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA5NSxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3JVbmRlcjIxOiA5NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTg6IDk3LFxuICAgIGR0SWRlbnRpdHlDYXJkVW5kZXIyMTogOTgsXG4gICAgZHRJZ25pdGlvbkludGVybG9ja1Blcm1pdDogMTAwLFxuICAgIGR0SW1taWdyYW50VmlzYTogMTAxLFxuICAgIGR0SW5kdHVjdGlvblBlcm1pdDogMTAyLFxuICAgIGR0SW5kdHVjdGlvblBlcm1pdFVuZGVyMTg6IDEwMyxcbiAgICBkdEluZHR1Y3Rpb25QZXJtaXRVbmRlcjIxOiAxMDQsXG4gICAgZHRJbnRlcmltRHJpdmluZ0xpY2Vuc2U6IDEwNSxcbiAgICBkdEludGVyaW1JZGVudGl0eUNhcmQ6IDEwNixcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlOiAxMDcsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMTg6IDEwOCxcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTA5LFxuICAgIGR0SnVuaW9yRHJpdmluZ0xpY2Vuc2U6IDExMCxcbiAgICBkdExlYXJuZXJJbmR0dWN0aW9uYWxQZXJtaXQ6IDExMSxcbiAgICBkdExlYXJuZXJMaWNlbnNlOiAxMTIsXG4gICAgZHRMZWFybmVyTGljZW5zZVVuZGVyMTg6IDExMyxcbiAgICBkdExlYXJuZXJMaWNlbnNlVW5kZXIyMTogMTE0LFxuICAgIGR0TGVhcm5lclBlcm1pdDogMTE1LFxuICAgIGR0TGVhcm5lclBlcm1pdFVuZGVyMTg6IDExNixcbiAgICBkdExlYXJuZXJQZXJtaXRVbmRlcjIxOiAxMTcsXG4gICAgZHRMaW1pdGVkTGljZW5zZTogMTE4LFxuICAgIGR0TGltaXRlZFBlcm1pdDogMTE5LFxuICAgIGR0TGltaXRlZFRlcm1Ecml2aW5nTGljZW5zZTogMTIwLFxuICAgIGR0TGltaXRlZFRlcm1JZGVudGl0eUNhcmQ6IDEyMSxcbiAgICBkdExpcXVvcklkZW50aXR5Q2FyZDogMTIyLFxuICAgIGR0TmV3UGVybWl0OiAxMjMsXG4gICAgZHROZXdQZXJtaXRVbmRlcjE4OiAxMjQsXG4gICAgZHROZXdQZXJtaXRVbmRlcjIxOiAxMjUsXG4gICAgZHROb25Vc0NpdGl6ZW5Ecml2aW5nTGljZW5zZTogMTI2LFxuICAgIGR0T2NjdXBhdGlvbmFsRHJpdmluZ0xpY2Vuc2U6IDEyNyxcbiAgICBkdE9uZWlkYVRyaWJlT2ZJbmRpYW5zSWRlbnRpdHlDYXJkOiAxMjgsXG4gICAgZHRPcGVyYXRvckxpY2Vuc2U6IDEyOSxcbiAgICBkdE9wZXJhdG9yTGljZW5zZVVuZGVyMTg6IDEzMCxcbiAgICBkdE9wZXJhdG9yTGljZW5zZVVuZGVyMjE6IDEzMSxcbiAgICBkdFBlcm1hbmVudERyaXZpbmdMaWNlbnNlOiAxMzIsXG4gICAgZHRQZXJtaXRUb1JlRW50ZXI6IDEzMyxcbiAgICBkdFByb2JhdGlvbmFyeUF1dG9MaWNlbnNlOiAxMzQsXG4gICAgZHRQcm9iYXRpb25hcnlEcml2aW5nTGljZW5zZVVuZGVyMTg6IDEzNSxcbiAgICBkdFByb2JhdGlvbmFyeURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTM2LFxuICAgIGR0UHJvYmF0aW9uYXJ5VmVoaWNsZVNhbGVzcGVyc29uTGljZW5zZTogMTM3LFxuICAgIGR0UHJvdmlzaW9uYWxEcml2aW5nTGljZW5zZTogMTM4LFxuICAgIGR0UHJvdmlzaW9uYWxEcml2aW5nTGljZW5zZVVuZGVyMTg6IDEzOSxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxNDAsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2U6IDE0MSxcbiAgICBkdFByb3Zpc2lvbmFsTGljZW5zZVVuZGVyMTg6IDE0MixcbiAgICBkdFByb3Zpc2lvbmFsTGljZW5zZVVuZGVyMjE6IDE0MyxcbiAgICBkdFB1YmxpY1Bhc3NlbmdlckNoYXVmZmV1ckxpY2Vuc2U6IDE0NCxcbiAgICBkdFJhY2luZ0FuZEdhbWluZ0NvbWlzc2lvbkNhcmQ6IDE0NSxcbiAgICBkdFJlZnVnZWVUcmF2ZWxEb2N1bWVudDogMTQ2LFxuICAgIGR0UmVuZXdhbFBlcm1pdDogMTQ3LFxuICAgIGR0UmVkdGljdGVkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiAxNDgsXG4gICAgZHRSZWR0aWN0ZWREcml2aW5nTGljZW5zZTogMTQ5LFxuICAgIGR0UmVkdGljdGVkUGVybWl0OiAxNTAsXG4gICAgZHRTZWFzb25hbFBlcm1pdDogMTUxLFxuICAgIGR0U2Vhc29uYWxSZXNpZGVudElkZW50aXR5Q2FyZDogMTUyLFxuICAgIGR0U2VuaW9yQ2l0aXplbklkZW50aXR5Q2FyZDogMTUzLFxuICAgIGR0U2V4T2ZmZW5kZXI6IDE1NCxcbiAgICBkdFNvY2lhbFNlY3VyaXR5Q2FyZDogMTU1LFxuICAgIGR0VGVtcG9yYXJ5RHJpdmluZ0xpY2Vuc2U6IDE1NixcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlVW5kZXIxODogMTU3LFxuICAgIGR0VGVtcG9yYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxNTgsXG4gICAgZHRUZW1wb3JhcnlJZGVudGl0eUNhcmQ6IDE1OSxcbiAgICBkdFRlbXBvcmFyeUluZHR1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmQ6IDE2MCxcbiAgICBkdFRlbXBvcmFyeUluZHR1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmRVbmRlcjE4OiAxNjEsXG4gICAgZHRUZW1wb3JhcnlJbmR0dWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkVW5kZXIyMTogMTYyLFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlOiAxNjMsXG4gICAgZHRUZW1wb3JhcnlWaXNpdG9yRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxNjQsXG4gICAgZHRUZW1wb3JhcnlWaXNpdG9yRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxNjUsXG4gICAgZHRVbmlmb3JtZWRTZXJ2aWNlc0lkZW50aXR5Q2FyZDogMTY2LFxuICAgIGR0VmVoaWNsZVNhbGVzcGVyc29uTGljZW5zZTogMTY3LFxuICAgIGR0V29ya2VySWRlbnRpZmljYXRpb25DcmVkZW50aWFsOiAxNjgsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2U6IDE2OSxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMTg6IDE3MCxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMjE6IDE3MSxcbiAgICBkdFBhc3Nwb3J0Q2FyZDogMTcyLFxuICAgIGR0UGVybWFuZW50UmVzaWRlbnRDYXJkOiAxNzMsXG4gICAgZHRQZXJzb25hbElkZW50aWZpY2F0aW9uVmVyaWZpY2F0aW9uOiAxNzQsXG4gICAgZHRUZW1wb3JhcnlPcGVyYXRvckxpY2Vuc2U6IDE3NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIxOTogMTc2LFxuICAgIGR0SWRlbnRpdHlDYXJkVW5kZXIxOTogMTc3LFxuICAgIGR0VmlzYTogMTc4LFxuICAgIGR0VGVtcG9yYXJ5UGFzc3BvcnQ6IDE3OSxcbiAgICBkdFZvdGluZ0NhcmQ6IDE4MCxcbiAgICBkdEhlYWx0aENhcmQ6IDE4MSxcbiAgICBkdENlcnRpZmljYXRlT2ZDaXRpemVuc2hpcDogMTgyLFxuICAgIGR0QWRkcmVzc0NhcmQ6IDE4MyxcbiAgICBkdEFpcnBvcnRJbW1pZ3JhdGlvbkNhcmQ6IDE4NCxcbiAgICBkdEFsaWVuUmVnaWR0YXRpb25DYXJkOiAxODUsXG4gICAgZHRBUEVIQ2FyZDogMTg2LFxuICAgIGR0Q291cG9udG9Ecml2aW5nTGljZW5zZTogMTg3LFxuICAgIGR0Q3Jld01lbWJlckNlcnRpZmljYXRlOiAxODgsXG4gICAgZHREb2N1bWVudEZvclJldHVybjogMTg5LFxuICAgIGR0RUNhcmQ6IDE5MCxcbiAgICBkdEVtcGxveW1lbnRDYXJkOiAxOTEsXG4gICAgZHRIS1NBUkltbWlncmF0aW9uRm9ybTogMTkyLFxuICAgIGR0SW1taWdyYW50Y2FyZDogMTkzLFxuICAgIGR0TGFib3VyQ2FyZDogMTk0LFxuICAgIGR0TGFpc3NlelBhc3NlcjogMTk1LFxuICAgIGR0TGF3eWVySWRlbnRpdHlDZXJ0aWZpY2F0ZTogMTk2LFxuICAgIGR0TGljZW5zZUNhcmQ6IDE5NyxcbiAgICBkdFBhc3Nwb3J0U3RhdGVsZXNzOiAxOTgsXG4gICAgZHRQYXNzcG9ydENoaWxkOiAxOTksXG4gICAgZHRQYXNzcG9ydENvbnN1bGFyOiAyMDAsXG4gICAgZHRQYXNzcG9ydERpcGxvbWF0aWNTZXJ2aWNlOiAyMDEsXG4gICAgZHRQYXNzcG9ydE9mZmljaWFsOiAyMDIsXG4gICAgZHRQYXNzcG9ydFByb3Zpc2lvbmFsOiAyMDMsXG4gICAgZHRQYXNzcG9ydFNwZWNpYWw6IDIwNCxcbiAgICBkdFBlcm1pc3Npb250b3RoZUxvY2FsQm9yZGVyVHJhZmZpYzogMjA1LFxuICAgIGR0U0VERVNPTENhcmQ6IDIwNyxcbiAgICBkdFNvY2lhbENhcmQ6IDIwOCxcbiAgICBkdFRCQ2FyZDogMjA5LFxuICAgIGR0VmVoaWNsZVBhc3Nwb3J0OiAyMTAsXG4gICAgZHRXRG9jdW1lbnQ6IDIxMSxcbiAgICBkdERpcGxvbWF0aWNJZGVudGl0eUNhcmQ6IDIxMixcbiAgICBkdENvbnN1bGFySWRlbnRpdHlDYXJkOiAyMTMsXG4gICAgZHRJbmNvbWVUYXhDYXJkOiAyMTQsXG4gICAgZHRSZXNpZGVuY2VQZXJtaXQ6IDIxNSxcbiAgICBkdERvY3VtZW50T2ZJZGVudGl0eTogMjE2LFxuICAgIGR0Qm9yZGVyQ3Jvc3NpbmdQZXJtaXQ6IDIxNyxcbiAgICBkdFBhc3Nwb3J0TGltaXRlZFZhbGlkaXR5OiAyMTgsXG4gICAgZHRTSU1DYXJkOiAyMTksXG4gICAgZHRUYXhDYXJkOiAyMjAsXG4gICAgZHRDb21wYW55Q2FyZDogMjIxLFxuICAgIGR0RG9tZXN0aWNQYXNzcG9ydDogMjIyLFxuICAgIGR0SWRlbnRpdHlDZXJ0aWZpY2F0ZTogMjIzLFxuICAgIGR0UmVzaWRlbnRJZENhcmQ6IDIyNCxcbiAgICBkdEFybWVkRm9yY2VzSWRlbnRpdHlDYXJkOiAyMjUsXG4gICAgZHRQcm9mZXNzaW9uYWxDYXJkOiAyMjYsXG4gICAgZHRSZWdpc3RyYXRpb25TdGFtcDogMjI3LFxuICAgIGR0RHJpdmVyQ2FyZDogMjI4LFxuICAgIGR0RHJpdmVyVHJhaW5pbmdDZXJ0aWZpY2F0ZTogMjI5LFxuICAgIGR0UXVhbGlmaWNhdGlvbkRyaXZpbmdMaWNlbnNlOiAyMzAsXG4gICAgZHRNZW1iZXJzaGlwQ2FyZDogMjMxLFxuICAgIGR0UHVibGljVmVoaWNsZURyaXZlckF1dGhvcml0eUNhcmQ6IDIzMixcbiAgICBkdE1hcmluZUxpY2Vuc2U6IDIzMyxcbiAgICBkdFRlbXBvcmFyeUxlYXJuZXJEcml2aW5nTGljZW5zZTogMjM0LFxuICAgIGR0VGVtcG9yYXJ5Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiAyMzUsXG4gICAgZHRJbnRlcmltSW5zdHJ1Y3Rpb25hbFBlcm1pdDogMjM2LFxuICAgIGR0Q2VydGlmaWNhdGVPZkNvbXBldGVuY3k6IDIzNyxcbiAgICBkdENlcnRpZmljYXRlT2ZQcm9maWNpZW5jeTogMjM4LFxufVxuXG5leHBvcnQgY29uc3QgRG9jRm9ybWF0ID0ge1xuICAgIElEMTogMCxcbiAgICBJRDI6IDEsXG4gICAgSUQzOiAyLFxuICAgIElEM194MjogNSxcbiAgICBDVVNUT006IDEwMDAsXG4gICAgRkxFWElCTEU6IDEwMDIsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJBY3Rpb24gPSB7XG4gICAgQ09NUExFVEU6IDEsXG4gICAgUFJPQ0VTUzogMCxcbiAgICBDQU5DRUw6IDIsXG4gICAgRVJST1I6IDMsXG4gICAgTk9USUZJQ0FUSU9OOiA1LFxuICAgIFBST0NFU1NfV0hJVEVfVVZfSU1BR0VTOiA2LFxuICAgIE1PUkVfUEFHRVNfQVZBSUxBQkxFOiA4LFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyRnJhbWUgPSB7XG4gICAgTUFYOiBcIm1heFwiLFxuICAgIFNDRU5BUklPX0RFRkFVTFQ6IFwiaWQxXCIsXG4gICAgTk9ORTogXCJub25lXCIsXG4gICAgRE9DVU1FTlQ6IFwiZG9jdW1lbnRcIixcbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlck9yaWVudGF0aW9uID0ge1xuICAgIFJPVEFURTogMCxcbiAgICBQT1JUUkFJVDogMSxcbiAgICBMQU5EU0NBUEU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlQ2hlY2tEaWFnbm9zZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIFBBU1M6IDEsXG4gICAgSU5WQUxJRF9JTlBVVF9EQVRBOiAyLFxuICAgIElOVEVSTkFMX0VSUk9SOiAzLFxuICAgIEVYQ0VQVElPTl9JTl9NT0RVTEU6IDQsXG4gICAgVU5DRVJUQUlOX1ZFUklGSUNBVElPTjogNSxcbiAgICBORUNFU1NBUllfSU1BR0VfTk9UX0ZPVU5EOiA3LFxuICAgIFBIT1RPX1NJREVTX05PVF9GT1VORDogOCxcbiAgICBJTlZBTElEX0NIRUNLU1VNOiAxMCxcbiAgICBTWU5UQVhfRVJST1I6IDExLFxuICAgIExPR0lDX0VSUk9SOiAxMixcbiAgICBTT1VSQ0VTX0NPTVBBUklTT05fRVJST1I6IDEzLFxuICAgIEZJRUxEU19DT01QQVJJU09OX0xPR0lDX0VSUk9SOiAxNCxcbiAgICBJTlZBTElEX0ZJRUxEX0ZPUk1BVDogMTUsXG4gICAgVFJVRV9MVU1JTklTQ0VOQ0VfRVJST1I6IDIwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9FUlJPUjogMjEsXG4gICAgRklYRURfUEFUVEVSTl9FUlJPUjogMjIsXG4gICAgTE9XX0NPTlRSQVNUX0lOX0lSX0xJR0hUOiAyMyxcbiAgICBJTkNPUlJFQ1RfQkFDS0dST1VORF9MSUdIVDogMjQsXG4gICAgQkFDS0dST1VORF9DT01QQVJJU09OX0VSUk9SOiAyNSxcbiAgICBJTkNPUlJFQ1RfVEVYVF9DT0xPUjogMjYsXG4gICAgUEhPVE9fRkFMU0VfTFVNSU5JU0NFTkNFOiAyNyxcbiAgICBUT09fTVVDSF9TSElGVDogMjgsXG4gICAgRklCRVJTX05PVF9GT1VORDogMzAsXG4gICAgVE9PX01BTllfT0JKRUNUUzogMzEsXG4gICAgU1BFQ0tTX0lOX1VWOiAzMyxcbiAgICBUT09fTE9XX1JFU09MVVRJT046IDM0LFxuICAgIElOVklTSUJMRV9FTEVNRU5UX1BSRVNFTlQ6IDQwLFxuICAgIFZJU0lCTEVfRUxFTUVOVF9BQlNFTlQ6IDQxLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0NPTE9SRUQ6IDQyLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0dSQVlTQ0FMRTogNDMsXG4gICAgVVZfRFVMTF9QQVBFUl9NUlo6IDUwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9NUlo6IDUxLFxuICAgIFVWX0RVTExfUEFQRVJfUEhPVE86IDUyLFxuICAgIFVWX0RVTExfUEFQRVJfQkxBTks6IDUzLFxuICAgIFVWX0RVTExfUEFQRVJfRVJST1I6IDU0LFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9CTEFOSzogNTUsXG4gICAgQkFEX0FSRUFfSU5fQVhJQUw6IDYwLFxuICAgIEZBTFNFX0lQSV9QQVJBTUVURVJTOiA2NSxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0hJR0hMSUdIVF9JUjogODAsXG4gICAgT1ZJX0lSX0lOVklTSUJMRTogOTAsXG4gICAgT1ZJX0lOU1VGRklDSUVOVF9BUkVBOiA5MSxcbiAgICBPVklfQ09MT1JfSU5WQVJJQUJMRTogOTIsXG4gICAgT1ZJX0JBRF9DT0xPUl9GUk9OVDogOTMsXG4gICAgT1ZJX0JBRF9DT0xPUl9TSURFOiA5NCxcbiAgICBPVklfV0lERV9DT0xPUl9TUFJFQUQ6IDk1LFxuICAgIE9WSV9CQURfQ09MT1JfUEVSQ0VOVDogOTYsXG4gICAgSE9MT0dSQU1fRUxFTUVOVF9BQlNFTlQ6IDEwMCxcbiAgICBIT0xPR1JBTV9TSURFX1RPUF9JTUFHRVNfQUJTRU5UOiAxMDEsXG4gICAgSE9MT0dSQU1fRUxFTUVOVF9QUkVTRU5UOiAxMDIsXG4gICAgUEhPVE9fUEFUVEVSTl9JTlRFUlJVUFRFRDogMTEwLFxuICAgIFBIT1RPX1BBVFRFUk5fU0hJRlRFRDogMTExLFxuICAgIFBIT1RPX1BBVFRFUk5fRElGRkVSRU5UX0NPTE9SUzogMTEyLFxuICAgIFBIT1RPX1BBVFRFUk5fSVJfVklTSUJMRTogMTEzLFxuICAgIFBIT1RPX1BBVFRFUk5fTk9UX0lOVEVSU0VDVDogMTE0LFxuICAgIFBIT1RPX1NJWkVfSVNfV1JPTkc6IDExNSxcbiAgICBQSE9UT19QQVRURVJOX0lOVkFMSURfQ09MT1I6IDExNixcbiAgICBQSE9UT19QQVRURVJOX1NISUZURURfVkVSVDogMTE3LFxuICAgIFBIT1RPX1BBVFRFUk5fUEFUVEVSTl9OT1RfRk9VTkQ6IDExOCxcbiAgICBQSE9UT19QQVRURVJOX0RJRkZFUkVOVF9MSU5FU19USElDS05FU1M6IDExOSxcbiAgICBQSE9UT19JU19OT1RfUkVDVEFOR0xFOiAxMjAsXG4gICAgUEhPVE9fQ09STkVSU19JU19XUk9ORzogMTIxLFxuICAgIERPQ1VNRU5UX0lTX0NBTkNFTExJTkc6IDEyMixcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9CTFVFOiAxMzAsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfR1JFRU46IDEzMSxcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9SRUQ6IDEzMixcbiAgICBURVhUX1NIT1VMRF9CRV9CTEFDSzogMTMzLFxuICAgIEJBUkNPREVfV0FTX1JFQURfV0lUSF9FUlJPUlM6IDE0MCxcbiAgICBCQVJDT0RFX0RBVEFfRk9STUFUX0VSUk9SOiAxNDEsXG4gICAgQkFSQ09ERV9TSVpFX1BBUkFNU19FUlJPUjogMTQyLFxuICAgIE5PVF9BTExfQkFSQ09ERVNfUkVBRDogMTQzLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fUE9SVFJBSVRTX0RJRkZFUjogMTUwLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fU0VSVklDRV9SRVBMWTogMTUxLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fU0VSVklDRV9FUlJPUjogMTUyLFxuICAgIFBQT1JUUkFJVF9DT01QQVJJU09OX05PVF9FTk9VR0hfSU1BR0VTOiAxNTMsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19MSVZFX1BIT1RPOiAxNTQsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19TRVJWSUNFX0xJQ0VOU0U6IDE1NSxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1BPUlRSQUlUX0RFVEVDVEVEOiAxNTYsXG4gICAgTU9CSUxFX0lNQUdFU19VTlNVSVRBQkxFX0xJR0hUX0NPTkRJVElPTlM6IDE2MCxcbiAgICBNT0JJTEVfSU1BR0VTX1dISVRFX1VWX05PX0RJRkZFUkVOQ0U6IDE2MSxcbiAgICBMQVNUX0RJQUdOT1NFX1ZBTFVFOiAxNjIsXG59XG5cbmV4cG9ydCBjb25zdCBlQ2hlY2tSZXN1bHQgPSB7XG4gICAgQ0hfQ0hFQ0tfRVJST1I6IDAsXG4gICAgQ0hfQ0hFQ0tfT0s6IDEsXG4gICAgQ0hfQ0hFQ0tfV0FTX05PVF9ET05FOiAyLFxufVxuXG5leHBvcnQgY29uc3QgZUdyYXBoaWNGaWVsZFR5cGUgPSB7XG4gICAgR0ZfUE9SVFJBSVQ6IDIwMSxcbiAgICBHRl9GSU5HRVJQUjogMjAyLFxuICAgIEdGX0VZRTogMjAzLFxuICAgIEdGX1NJR05BVFVSRTogMjA0LFxuICAgIEdGX0JBUl9DT0RFOiAyMDUsXG4gICAgR0ZfUFJPT0ZfT0ZfQ0lUSVpFTlNISVA6IDIwNixcbiAgICBHRl9ET0NVTUVOVF9JTUFHRTogMjA3LFxuICAgIEdGX0NPTE9SX0RZTkFNSUM6IDIwOSxcbiAgICBHRl9HSE9TVF9QT1JUUkFJVDogMjEwLFxuICAgIEdGX1NUQU1QOiAyMTEsXG4gICAgR0ZfUE9SVFJBSVRfT0ZfQ0hJTEQ6IDIxMixcbiAgICBHRl9PVEhFUjogMjUwLFxuICAgIEdGX0ZJTkdFUl9MRUZUX1RIVU1COiAzMDAsXG4gICAgR0ZfRklOR0VSX0xFRlRfSU5ERVg6IDMwMSxcbiAgICBHRl9GSU5HRVJfTEVGVF9NSURETEU6IDMwMixcbiAgICBHRl9GSU5HRVJfTEVGVF9SSU5HOiAzMDMsXG4gICAgR0ZfRklOR0VSX0xFRlRfTElUVExFOiAzMDQsXG4gICAgR0ZfRklOR0VSX1JJR0hUX1RIVU1COiAzMDUsXG4gICAgR0ZfRklOR0VSX1JJR0hUX0lOREVYOiAzMDYsXG4gICAgR0ZfRklOR0VSX1JJR0hUX01JRERMRTogMzA3LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9SSU5HOiAzMDgsXG4gICAgR0ZfRklOR0VSX1JJR0hUX0xJVFRMRTogMzA5LFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfUE9SVFJBSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUlBSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmdlcnByaW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9FWUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXJpc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfU0lHTkFUVVJFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNpZ25hdHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfQkFSX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFyY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfUFJPT0ZfT0ZfQ0lUSVpFTlNISVA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvb2Ygb2YgY2l0aXplbnNoaXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0RPQ1VNRU5UX0lNQUdFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IGltYWdlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9DT0xPUl9EWU5BTUlDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbG9yIGR5bmFtaWNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9HSE9TVF9QT1JUUkFJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaG9zdCBwb3J0cmFpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfU1RBTVA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhbXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1BPUlRSQUlUX09GX0NISUxEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnRyYWl0IG9mIGNoaWxkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9PVEhFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfVEhVTUI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCB0aHVtYlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfSU5ERVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCBpbmRleCBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX01JRERMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IG1pZGRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX1JJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCByaW5nIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfTElUVExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgbGl0dGxlIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX1RIVU1COlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IHRodW1iXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfSU5ERVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgaW5kZXggZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfTUlERExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IG1pZGRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9SSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IHJpbmcgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfTElUVExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IGxpdHRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZUltYWdlUXVhbGl0eUNoZWNrVHlwZSA9IHtcbiAgICBJUUNfSU1BR0VfR0xBUkVTOiAwLFxuICAgIElRQ19JTUFHRV9GT0NVUzogMSxcbiAgICBJUUNfSU1BR0VfUkVTT0xVVElPTjogMixcbn1cblxuZXhwb3J0IGNvbnN0IGVQcm9jZXNzR0xDb21tYW5kcyA9IHtcbiAgICBlUENfUHJvY01ncl9TZXRMaWNlbnNlOiAxMjEwMCxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzOiAxMjEwMSxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzQXN5bmM6IDEyMTAyLFxuICAgIGVQQ19Qcm9jTWdyX0luaXQ6IDEyMTAzLFxuICAgIGVQQ19Qcm9jTWdyX1Byb2Nlc3NJbWFnZTogMTIxMDQsXG4gICAgZVBDX1Byb2NNZ3JfU3RhcnROZXdEb2N1bWVudDogMTIxMDUsXG4gICAgZVBDX1Byb2NNZ3JfU3RhcnROZXdQYWdlOiAxMjEwNixcbiAgICBlUENfUHJvY01ncl9VbmxvYWQ6IDEyMTA3LFxuICAgIGVQQ19Qcm9jTWdyX0NoZWNrRGF0YWJhc2U6IDEyMTA5LFxuICAgIGVQQ19Qcm9jTWdyX0NvbXBhcmVQb3J0cmFpdHM6IDEyMTExLFxufVxuXG5leHBvcnQgY29uc3QgZVJlcXVlc3RDb21tYW5kID0ge1xuICAgIGVSZXFDbWRfUkZpZF9TZW5kRGF0YTogMTAwLFxuICAgIGVSZXFDbWRfUkZpZF9Ob3RpZnk6IDEwMSxcbiAgICBlUmVxQ21kX1JGaWRfR2V0RGF0YUZvclNjZW5hcmlvOiAxMDIsXG4gICAgZVJlcUNtZF9Ub3JjaF9HZXRVVkZvdG86IDIwMCxcbiAgICBlUmVxQ21kX0ludGVybmV0U2VuZDogMzAwLFxuICAgIGVSZXFDbWRfR2V0R3VpZDogNDAwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQWNjZXNzQ29udHJvbF9Qcm9jZWR1cmVUeXBlID0ge1xuICAgIEFDUFRfVU5ERUZJTkVEOiAwLFxuICAgIEFDUFRfQkFDOiAxLFxuICAgIEFDUFRfUEFDRTogMixcbiAgICBBQ1BUX0NBOiAzLFxuICAgIEFDUFRfVEE6IDQsXG4gICAgQUNQVF9BQTogNSxcbiAgICBBQ1BUX1JJOiA2LFxuICAgIEFDUFRfQ0FSRF9JTkZPOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0F1dGhlbnRpY2F0aW9uUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBhcHRVbmRlZmluZWQ6IDAsXG4gICAgYXB0U3RhbmRhcmQ6IDEsXG4gICAgYXB0QWR2YW5jZWQ6IDIsXG4gICAgYXB0R2VuZXJhbDogMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0JhdWRSYXRlID0ge1xuICAgIHJmYnJfMTA2OiAxLFxuICAgIHJmYnJfMjEyOiAyLFxuICAgIHJmYnJfNDI0OiA0LFxuICAgIHJmYnJfODQ4OiA4LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQ2VydGlmaWNhdGVUeXBlID0ge1xuICAgIENUX1VOREVGSU5FRDogMCxcbiAgICBDVF9DU0NBOiAxLFxuICAgIENUX0NTQ0FfTElOSzogMixcbiAgICBDVF9EUzogMyxcbiAgICBDVF9NTFM6IDQsXG4gICAgQ1RfREVWX0xTOiA1LFxuICAgIENUX0RFRl9MUzogNixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0RhdGFGaWxlX1R5cGUgPSB7XG4gICAgREZUX1VOU1BFQ0lGSUVEOiAwLFxuICAgIERGVF9QQVNTUE9SVF9ERzE6IDEsXG4gICAgREZUX1BBU1NQT1JUX0RHMjogMixcbiAgICBERlRfUEFTU1BPUlRfREczOiAzLFxuICAgIERGVF9QQVNTUE9SVF9ERzQ6IDQsXG4gICAgREZUX1BBU1NQT1JUX0RHNTogNSxcbiAgICBERlRfUEFTU1BPUlRfREc2OiA2LFxuICAgIERGVF9QQVNTUE9SVF9ERzc6IDcsXG4gICAgREZUX1BBU1NQT1JUX0RHODogOCxcbiAgICBERlRfUEFTU1BPUlRfREc5OiA5LFxuICAgIERGVF9QQVNTUE9SVF9ERzEwOiAxMCxcbiAgICBERlRfUEFTU1BPUlRfREcxMTogMTEsXG4gICAgREZUX1BBU1NQT1JUX0RHMTI6IDEyLFxuICAgIERGVF9QQVNTUE9SVF9ERzEzOiAxMyxcbiAgICBERlRfUEFTU1BPUlRfREcxNDogMTQsXG4gICAgREZUX1BBU1NQT1JUX0RHMTU6IDE1LFxuICAgIERGVF9QQVNTUE9SVF9ERzE2OiAxNixcbiAgICBERlRfUEFTU1BPUlRfREcxNzogMTcsXG4gICAgREZUX1BBU1NQT1JUX0RHMTg6IDE4LFxuICAgIERGVF9QQVNTUE9SVF9ERzE5OiAxOSxcbiAgICBERlRfUEFTU1BPUlRfREcyMDogMjAsXG4gICAgREZUX1BBU1NQT1JUX1NPRDogMjEsXG4gICAgREZUX1BBU1NQT1JUX0NWQ0E6IDIyLFxuICAgIERGVF9QQVNTUE9SVF9DT006IDIzLFxuICAgIERGVF9JRF9ERzE6IDEwMSxcbiAgICBERlRfSURfREcyOiAxMDIsXG4gICAgREZUX0lEX0RHMzogMTAzLFxuICAgIERGVF9JRF9ERzQ6IDEwNCxcbiAgICBERlRfSURfREc1OiAxMDUsXG4gICAgREZUX0lEX0RHNjogMTA2LFxuICAgIERGVF9JRF9ERzc6IDEwNyxcbiAgICBERlRfSURfREc4OiAxMDgsXG4gICAgREZUX0lEX0RHOTogMTA5LFxuICAgIERGVF9JRF9ERzEwOiAxMTAsXG4gICAgREZUX0lEX0RHMTE6IDExMSxcbiAgICBERlRfSURfREcxMjogMTEyLFxuICAgIERGVF9JRF9ERzEzOiAxMTMsXG4gICAgREZUX0lEX0RHMTQ6IDExNCxcbiAgICBERlRfSURfREcxNTogMTE1LFxuICAgIERGVF9JRF9ERzE2OiAxMTYsXG4gICAgREZUX0lEX0RHMTc6IDExNyxcbiAgICBERlRfSURfREcxODogMTE4LFxuICAgIERGVF9JRF9ERzE5OiAxMTksXG4gICAgREZUX0lEX0RHMjA6IDEyMCxcbiAgICBERlRfSURfREcyMTogMTIxLFxuICAgIERGVF9ETF9DT006IDE1MCxcbiAgICBERlRfRExfREcxOiAxNTEsXG4gICAgREZUX0RMX0RHMjogMTUyLFxuICAgIERGVF9ETF9ERzM6IDE1MyxcbiAgICBERlRfRExfREc0OiAxNTQsXG4gICAgREZUX0RMX0RHNTogMTU1LFxuICAgIERGVF9ETF9ERzY6IDE1NixcbiAgICBERlRfRExfREc3OiAxNTcsXG4gICAgREZUX0RMX0RHODogMTU4LFxuICAgIERGVF9ETF9ERzk6IDE1OSxcbiAgICBERlRfRExfREcxMDogMTYwLFxuICAgIERGVF9ETF9ERzExOiAxNjEsXG4gICAgREZUX0RMX0RHMTI6IDE2MixcbiAgICBERlRfRExfREcxMzogMTYzLFxuICAgIERGVF9ETF9ERzE0OiAxNjQsXG4gICAgREZUX0RMX1NPRDogMTY1LFxuICAgIERGVF9ETF9DRTogMTY2LFxuICAgIERGVF9ETF9DVkNBOiAxNjcsXG4gICAgREZUX1BBQ0VfQ0FSREFDQ0VTUzogMjAwLFxuICAgIERGVF9QQUNFX0NBUkRTRUNVUklUWTogMjAxLFxuICAgIERGVF9QQUNFX0NISVBTRUNVUklUWTogMjAyLFxuICAgIERGVF9NSUZBUkVfREFUQTogMzAwLFxuICAgIERGVF9NSUZBUkVfVkFMSURJVFk6IDMwMSxcbiAgICBERlRfQVVUSEVOVElDSVRZVjI6IDMwMixcbiAgICBERlRfQVRSOiA0MDAsXG4gICAgREZUX0VTSUdOX1BLOiA1MDAsXG4gICAgREZUX0VTSUdOX1NJR05FRERBVEE6IDUwMSxcbiAgICBERlRfQ0VSVElGSUNBVEU6IDYwMCxcbiAgICBERlRfTUFTVEVSTElTVDogNjAxLFxuICAgIERGVF9ERUZFQ1RMSVNUOiA2MDIsXG4gICAgREZUX0RFVklBVElPTkxJU1Q6IDYwMyxcbiAgICBERlRfQVBQX0RJUkVDVE9SWTogNzAwLFxuICAgIERGVF9TRVNTSU9OOiA3MDEsXG4gICAgREZUX0xPR0RBVEE6IDcwMixcbiAgICBERlRfQ0hJUF9QUk9QRVJUSUVTOiA3MDMsXG4gICAgREZUX1VTRVJERUZJTkVEOiAxMDAwLFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01JRkFSRV9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1JRkFSRSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfQ09NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNPTVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DT01cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFjaGluZSBSZWFkYWJsZSBab25lIChERzEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IHR5cGVcIiArIFwiIChERzEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRleHQgZGF0YSBlbGVtZW50cyAoREcxKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZhY2lhbCBkYXRhIChERzIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3Vpbmcgc3RhdGVcIiArIFwiIChERzIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpY2Vuc2UgaG9sZGVyIGluZm9ybWF0aW9uIChERzIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gRmluZ2VycHJpbnQocykgKERHMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBleHBpcnlcIiArIFwiIChERzMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5IGRldGFpbHMgKERHMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBJcmlzIERhdGEgKERHNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2l2ZW4gbmFtZVwiICsgXCIgKERHNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXQgaW1hZ2UgKERHNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXQocykgKERHNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZS9naXZlbiBuYW1lIGF0IGJpcnRoXCIgKyBcIiAoREc1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaWduYXR1cmUgLyB1c3VhbCBtYXJrIGltYWdlIChERzUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzYpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBzZXVkb255bVwiICsgXCIgKERHNilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGYWNpYWwgZGF0YSAoREc2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaWduYXR1cmUgLyB1c3VhbCBtYXJrIGltYWdlIChERzcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjYWRlbWljIHRpdGxlXCIgKyBcIiAoREc3KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZpbmdlcnByaW50KHMpIChERzcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgYmlydGhcIiArIFwiIChERzgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gSXJpcyBEYXRhIChERzgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoXCIgKyBcIiAoREc5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIE90aGVyIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3QgZGVmaW5lZCAoREcxMClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hdGlvbmFsaXR5XCIgKyBcIiAoREcxMClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzEwKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRkaXRpb25hbCBwZXJzb25hbCBkZXRhaWwocykgKERHMTEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXhcIiArIFwiIChERzExKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZG9tZXN0aWMgZGF0YSAoREcxMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFkZGl0aW9uYWwgZG9jdW1lbnQgZGV0YWlscyAoREcxMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRldGFpbHNcIiArIFwiIChERzEyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm9uLW1hdGNoIGFsZXJ0IChERzEyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGV0YWlsKHMpIChERzEzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjdGl2ZSBBdXRoZW50aWNhdGlvbiBpbmZvIChERzEzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUFDIGluZm8gKERHMTQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmRlZmluZWRcIiArIFwiIChERzE0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUFDIGluZm8gKERHMTQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY3RpdmUgQXV0aGVudGljYXRpb24gaW5mbyAoREcxNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJzb24ocykgdG8gbm90aWZ5IChERzE2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxNilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMTdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIHJlZ2lzdHJhdGlvblwiICsgXCIgKERHMTcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERzE4XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiByZWdpc3RyYXRpb25cIiArIFwiIChERzE4KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcxOVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAxXCIgKyBcIiAoREcxOSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMjBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMlwiICsgXCIgKERHMjApXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkZXRhaWxzXCIgKyBcIiAoREcyMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9TT0Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuU09EXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfU09EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLlNPRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0NWQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ1ZDQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01JRkFSRV9WQUxJRElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNSUZBUkUgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQUNFX0NBUkRBQ0NFU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ2FyZEFjY2Vzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBQ0VfQ0FSRFNFQ1VSSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNhcmRTZWN1cml0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBQ0VfQ0hJUFNFQ1VSSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNoaXBTZWN1cml0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0NFUlRJRklDQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQVBQX0RJUkVDVE9SWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcHAgZGlyZWN0b3J5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQVRSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9BVFJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9BVVRIRU5USUNJVFlWMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfQ0hJUF9QUk9QRVJUSUVTXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQ0hJUF9QUk9QRVJUSUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9DSElQX1BST1BFUlRJRVNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ERUZFQ1RMSVNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ERUZFQ1RMSVNUXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfREVWSUFUSU9OTElTVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfREVWSUFUSU9OTElTVFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ETF9DRVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NWQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RMX0NWQ0FcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9FU0lHTl9QSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfRVNJR05fUEtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9FU0lHTl9TSUdORUREQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9FU0lHTl9TSUdORUREQVRBXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfTE9HREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfTE9HREFUQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01BU1RFUkxJU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX01BU1RFUkxJU1RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9TRVNTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9TRVNTSU9OXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfVU5TUEVDSUZJRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX1VOU1BFQ0lGSUVEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfVVNFUkRFRklORUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX1VTRVJERUZJTkVEXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX05vdGlmaWNhdGlvbkFuZEVycm9yQ29kZXMgPSB7XG4gICAgUkZJRF9OT1RJRklDQVRJT05fRVJST1I6IDY1NTM2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0RPQ1VNRU5UX1JFQURZOiA2NTUzNyxcbiAgICBSRklEX05PVElGSUNBVElPTl9SRUFEX1BST1RPQ09MNDogNjU1MzksXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDM6IDY1NTQ2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BST0dSRVNTOiA2NTU0NyxcbiAgICBSRklEX05PVElGSUNBVElPTl9UQV9TVEVQOiA2NTU1MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9SRVFVSVJFRDogNjU1NTEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fSVNPX0VSUk9SOiA2OTYzMixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9SRVFVRVNUOiA3NzgyNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9FU1RBQkxJU0hFRDogODE5MzUsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfRElTQ09OTkVDVEVEOiAxMzEwNzIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0VEOiAxMzEwNzMsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19SRUNFSVZFRDogMTMxMDc0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUkVBRElOR19USU1FOiAxMzEwNzUsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19EQVRBX1JFQ0VJVkVEOiAxMzEwNzYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19TRU5UOiAxMzEwNzcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9SRUFESU5HX1NQRUVEOiAxMzEwNzgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9QUk9DRVNTX1RJTUU6IDEzMTA3OSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9MSVNUX0NIQU5HSU5HOiAxMzEwODAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19FWFRfTEVOR1RIX1NVUFBPUlQ6IDEzMTA4OCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTjogMTMxMDg5LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0NFUlRJRklDQVRFX0NIQUlOX0lURU06IDEzMTA5MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TQ0VOQVJJTzogMTMxMTA0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBRElOR19EQVRBR1JPVVA6IDE5NjYwOCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0ZJTEVfTk9UX0ZPVU5EOiAyNjIxNDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19FTkRfT0ZfRklMRTogMzI3NjgwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRklMRV9BQ0NFU1NfREVOSUVEOiAzOTMyMTYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19BUFBMSUNBVElPTl9TRUxFQ1RFRDogNDU4NzUyLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9TVEFSVDogNTI0Mjg4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9GSU5JU0g6IDU4OTgyNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9TRUNVUklUWV9PQkpFQ1RfQ0hFQ0s6IDY1NTM2MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9GSUxFX0NIRUNLOiA3MjA4OTYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19VUERBVElOR19EQVRBR1JPVVA6IDc4NjQzMixcbiAgICBSRklEX05PVElGSUNBVElPTl9BVVhJTElBUllfREFUQV9WQUxJREFUSU9OOiA4NTE5NjgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUklfU0VDVE9SX0lEOiA5MTc1MDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQklPTUVUUklDU19FTVBUWV9QTEFDRUhPTERFUjogOTgzMDQwLFxuICAgIFJGSURfRVJST1JfTk9fRVJST1I6IDEsXG4gICAgUkZJRF9FUlJPUl9BTFJFQURZX0RPTkU6IDIsXG4gICAgUkZJRF9MQVlFUjZfRklMRV9FT0YxOiAtMjE0NzQ1ODQzMCxcbiAgICBSRklEX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQ6IC0yMTQ3NDU4NDI5LFxuICAgIFJGSURfTEFZRVI2X1BXRF9CTE9DS0VEOiAtMjE0NzQ1ODExMixcbiAgICBSRklEX0xBWUVSNl9QV0RfU1VTUEVOREVEOiAtMjE0NzQ1ODExMSxcbiAgICBSRklEX0xBWUVSNl9QV0RfQkxPQ0tFRF8yOiAtMjE0NzQ1NjYzNyxcbiAgICBSRklEX0xBWUVSNl9QV0RfREVBQ1RJVkFURURfMjogLTIxNDc0NTY2MzYsXG4gICAgUkZJRF9MQVlFUjZfUFdEX1NVU1BFTkRFRF8yOiAtMjE0NzQ1NjYzNSxcbiAgICBSRklEX0xBWUVSNl9NU0VfU0VUX0FUX0ZBSUxVUkU6IC0yMDQ2ODE5NTc4LFxuICAgIFJGSURfTEFZRVI2X0lOQ09SUkVDVF9QQVJBTVM6IC0yMTQ3NDU2Mzg0LFxuICAgIFJGSURfTEFZRVI2X0ZJTEVfTk9UX0ZPVU5EOiAtMjE0NzQ1NjM4MixcbiAgICBSRklEX0xBWUVSNl9OT19SRUZFUkVOQ0VfREFUQTogLTIxNDc0NTYzNzYsXG4gICAgUkZJRF9MQVlFUjZfRklMRV9FT0YyOiAtMjE0NzQ1NjI1NixcbiAgICBSRklEX0Vycm9yX0dyYXBoTWFuYWdlcjogLTIxNDc0MTgxMTIsXG4gICAgUkZJRF9FUlJPUl9OT19DSElQX0RFVEVDVEVEOiAtMjE0NzQxODExMSxcbiAgICBSRklEX0VSUk9SX05PVF9BVkFJTEFCTEU6IC0yMTQ3NDE4MTEwLFxuICAgIFJGSURfRVJST1JfSU5WQUxJRF9QQVJBTUVURVI6IC0yMTQ3NDE4MTA4LFxuICAgIFJGSURfRVJST1JfTk9UX0lOSVRJQUxJWkVEOiAtMjE0NzQxODEwNyxcbiAgICBSRklEX0Vycm9yX05vdEVub3VnaE1lbW9yeTogLTIxNDc0MTgxMDYsXG4gICAgUkZJRF9FUlJPUl9JTlZBTElEX0RJUkVDVE9SWTogLTIxNDc0MTgxMDQsXG4gICAgUkZJRF9FUlJPUl9VTktOT1dOX0NPTU1BTkQ6IC0yMTQ3NDE4MTAzLFxuICAgIFJGSURfRVJST1JfRklMRV9JT19FUlJPUjogLTIxNDc0MTgxMDIsXG4gICAgUkZJRF9FUlJPUl9CVVNZOiAtMjE0NzQxODEwMSxcbiAgICBSRklEX0VSUk9SX09MRF9GSVJNV0FSRTogLTIxNDc0MTgxMDAsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRDogLTIxNDczNTI1NzYsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX1JFQURFUl9OT1RfQVZBSUxBQkxFOiAtMjE0NzM1MjU3NSxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FOVF9DT05ORUNUX0NBUkQ6IC0yMTQ3MzUyNTc0LFxuICAgIFJGSURfRVJST1JfUENTQ19DQVJEX0lTX05PVF9DT05ORUNURUQ6IC0yMTQ3MzUyNTczLFxuICAgIFJGSURfRVJST1JfUENTQ19PUEVSQVRJT05fQ0FOQ0VMTEVEOiAtMjE0NzM1MjU3MixcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19CVVNZOiAtMjE0NzM1MjU3MSxcbiAgICBSRklEX0VSUk9SX1BDU0NfRkFJTEVEX1NfQ0FSRDogLTIxNDczNTI1NzAsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0VYVF9MRV9GQUlMRUQ6IC0yMTQ3MzUyNTYwLFxuICAgIFJGSURfTEFZRVI2X1BXRF9GQUlMRUQ6IC0yMTQ2NDA5NTM2LFxuICAgIFJGSURfRVJST1JfTk9UX1BFUkZPUk1FRDogLTIwOTcxNTIwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lTX0NMT1NFRDogLTIwOTcxNTE5OTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1VOU1VQUE9SVEVEX09QRVJBVElPTjogLTIwOTcxNTE5OTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfVU5LTk9XTjogLTIwOTcxNTE5ODQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfQkFEX0NFUlRJRklDQVRFOiAtMjA5NzE1MTk4MyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9OT1RfU0VUOiAtMjA5NzE1MTk4MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfVU5LTk9XTjogLTIwOTcxNTE5ODEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX1VOU1VQUE9SVEVEOiAtMjA5NzE1MTk4MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfTk9UX1NFVDogLTIwOTcxNTE5NzksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5LTk9XTl9UWVBFOiAtMjA5NzE1MTk3OCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9VTlNVUFBPUlRFRF9TTV9UWVBFOiAtMjA5NzE1MTk3NyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9JTkNPUlJFQ1RfU01fVFlQRTogLTIwOTcxNTE5NzYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfUkVTVFJJQ1RFRDogLTIwOTcxNTE5NzUsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX0RBVEE6IC0yMDk3MTUxOTc0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX05PVF9TRVQ6IC0yMDk3MTUxOTczLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QV0RfTUFOQUdFTUVOVF9OT1RfQVVUSE9SSVpFRDogLTIwOTcxNTE5NzIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1VOS05PV05fVFlQRTogLTIwOTcxNTE5NjgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1NNOiAtMjA5NzE1MTk2NyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfUEFDRTogLTIwOTcxNTE5NjYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBX0tFWVM6IC0yMDk3MTUxOTY1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19UQTogLTIwOTcxNTE5NjQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBOiAtMjA5NzE1MTk2MyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfSU5DT1JSRUNUX09QVElPTl9DQTogLTIwOTcxNTE5NjIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0NBX0ZBSUxFRDogLTIwOTcxNTE5NjEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1RBX0ZBSUxFRDogLTIwOTcxNTE5NjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0FBX0ZBSUxFRDogLTIwOTcxNTE5NTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JJX0ZBSUxFRDogLTIwOTcxNTE5NTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BBX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6IC0yMDk3MTUxOTUyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QQV9IQVNIX0NIRUNLX0ZBSUxFRDogLTIwOTcxNTE5NTEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfREFURV9PRl9FWFBJUlk6IC0yMDk3MTUxOTM2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfQklSVEg6IC0yMDk3MTUxOTM1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0NPTU1VTklUWV9JRDogLTIwOTcxNTE5MzQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9SRVFVSVJFU19BUFBfU0VMRUNUSU9OOiAtMjA5NzE1MTkyMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfU0VUOiAtMjA5NzE1MTkxOSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfVkVSSUZJRUQ6IC0yMDk3MTUxOTE4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTkNPUlJFQ1RfREFUQTogLTIwOTcxNTE5MDQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfTk9UX0VOT1VHSF9EQVRBOiAtMjA5NzA4NjQ2NCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9JTkNPUlJFQ1RfREFUQTogLTIwOTcwMjA5MjgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfVU5FWFBFQ1RFRF9EQVRBOiAtMjA5Njk1NTM5MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IC0yMDk2ODg5ODU2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1dST05HX1RBRzogLTIwOTY4MjQzMjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9VU0VfREFUQTogLTIwOTY3NTg3ODQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9SRUFEX0RBVEE6IC0yMDk2NjkzMjQ4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0FDQ0VTU19ERU5JRUQ6IC0yMDk2NjI3NzEyLFxuICAgIFJGSURfTEFZRVI2X1NFQ1VSSVRZX01BTkFHRVI6IC0yMDQ2ODIwMzUyLFxuICAgIFJGSURfTEFZRVI2X0FQUF9TRUxFQ1RJT05fRkFJTFVSRTogLTIwNDY4MjAzNTEsXG4gICAgUkZJRF9MQVlFUjZfTVVUVUFMX0FVVEhfTUFDX0ZBSUw6IC0yMDQ2ODIwMDk2LFxuICAgIFJGSURfTEFZRVI2X01VVFVBTF9BVVRIX0VOQ19GQUlMOiAtMjA0NjgyMDA5NSxcbiAgICBSRklEX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFOiAtMjA0NjgyMDA5NCxcbiAgICBSRklEX0xBWUVSNl9TTV9ETzhFX01JU1NJTkc6IC0yMDQ2ODE5ODQwLFxuICAgIFJGSURfTEFZRVI2X1NNX0RPODdfTUlTU0lORzogLTIwNDY4MTk4MzksXG4gICAgUkZJRF9MQVlFUjZfU01fRE85OV9NSVNTSU5HOiAtMjA0NjgxOTgzOCxcbiAgICBSRklEX0xBWUVSNl9TTV9NQUNfSU5DT1JSRUNUOiAtMjA0NjgxOTgzNyxcbiAgICBSRklEX0xBWUVSNl9TTV9ETzg3X0lOQ09SUkVDVDogLTIwNDY4MTk4MzYsXG4gICAgUkZJRF9MQVlFUjZfTk9OX1RMVl9SRVNQT05TRV9EQVRBOiAtMjA0NjgxOTU4NCxcbiAgICBSRklEX0xBWUVSNl9XUk9OR19STkRfSUNDX0xFTkdUSDogLTIwNDY4MTk1ODMsXG4gICAgUkZJRF9MQVlFUjZfSU5UX0FVVEhfRkFJTFVSRTogLTIwNDY4MTk1ODIsXG4gICAgUkZJRF9MQVlFUjZfTVNFX1NFVF9LQVRfRkFJTFVSRTogLTIwNDY4MTk1ODEsXG4gICAgUkZJRF9MQVlFUjZfTVNFX1NFVF9EU1RfRkFJTFVSRTogLTIwNDY4MTk1ODAsXG4gICAgUkZJRF9MQVlFUjZfUFNPX0NFUlRJRklDQVRFX0ZBSUxVUkU6IC0yMDQ2ODE5NTc5LFxuICAgIFJGSURfTEFZRVI2X0dFVF9DSEFMTEVOR0VfRkFJTFVSRTogLTIwNDY4MTk1NzcsXG4gICAgUkZJRF9MQVlFUjZfRVhUX0FVVEhfRkFJTFVSRTogLTIwNDY4MTk1NzYsXG4gICAgUkZJRF9MQVlFUjZfR0VORVJBTF9BVVRIX0ZBSUxVUkU6IC0yMDQ2ODE5NTc1LFxuICAgIFJGSURfRVJST1JfRkFJTEVEOiAtMSxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9fRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT0tcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzY0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTjogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzY0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTjogTm90IGVub3VnaCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2NDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IENvbnRlbnRzIHVuZXhwZWN0ZWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBFbmNhcCBjb250ZW50cyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVkIGRhdGE6IERpZ2VzdCBhbGdvcml0aG1zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogRGlnZXN0IGFsZ29yaXRobSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IERHIGhhc2hlcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IFZlcnNpb24gaW5mbyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFNOIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFNpZ25hdHVyZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBJc3N1ZXIgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogVmFsaWRpdHkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogU3ViamVjdCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBTdWJqZWN0IFBLIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IEV4dGVuc2lvbnMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBTSUQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogRGlnZXN0IGFsZ29yaXRobXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU2lnbmVkIGF0dHJpYnV0ZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU2lnbiBhbGdvcml0aG1zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFNpZ25hdHVyZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBVbnNpZ25lZCBhdHRyaWJ1dGVzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIExEUyBvYmplY3Q6IFVuc3VwcG9ydGVkIGRpZ2VzdCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVkIGRhdGE6IFNpZ25lciBpbmZvcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogVW5zdXBwb3J0ZWQgZGlnZXN0IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogVW5zdXBwb3J0ZWQgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVyIGluZm86IFNpZ25lZCBhdHRyaWJ1dGVzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmVyIGluZm8gY2FudCBmaW5kIGNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1Njg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBFcnJvclwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogVW5zdXBwb3J0ZWQgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogVW5zdXBwb3J0ZWQgcHVibGljIGtleSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IE1lc3NlZCBhbGdvcml0aG1zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBQdWJsaWMga2V5IGRhdGEgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogQWxnb3JpdGhtIHBhcmFtZXRlcnMgZGF0YSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBTaWduYXR1cmUgZGF0YSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBVbnN1cHBvcnRlZCBkaWdlc3QgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBTaWduYXR1cmUgZGF0YSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IEFsZ29yaXRobSBwYXJhbWV0ZXJzIG5vdCBkZWZpbmVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBTaWduYXR1cmUgY2hlY2sgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBERzogV3JvbmcgVGFnXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDY0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IFN5bW1ldHJpYyBDeXBoZXIgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEtleSBBZ3JlZW1lbnQgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEVwaGVtZXJhbCBLZXlzIENhbm5vdCBDcmVhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE1hcHBpbmcgQ2Fubm90IERlY29kZSBOb25jZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogU2hhcmVkIFNlY3JldCBDYW5ub3QgQ3JlYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBEb21haW4gUGFyYW1zIFVuc3VwcG9ydGVkIEZvcm1hdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogRXBoZW1lcmFsIEtleXMgSW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBNYXBwaW5nIEVwaGVtZXJhbCBLZXlzIEluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTWFwcGluZyBDYW5ub3QgUGVyZm9ybVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTm9uIE1hdGNoaW5nIEF1dGggVG9rZW5zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogQ2Fubm90IEZpbmQgUHVibGljIEtleVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIEluZm9cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIERvbWFpbiBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogS2V5IEFncmVlbWVudCBDYW5ub3QgSW5pdGlhbGl6ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IFB1YmxpYyBLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogRXBoZW1lcmFsIEtleXMgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IFNoYXJlZCBTZWNyZXQgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IE5vbiBNYXRjaGluZyBBdXRoIFRva2Vuc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IEluY29ycmVjdCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogQ2Fubm90IEJ1aWxkIENlcnRpZmljYXRlIENoYWluXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogQ2Fubm90IEZpbmQgSVMgUHJpdmF0ZSBLZXlcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBQdWJsaWMgS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IFNpZ25hdHVyZSBCdWlsZGluZyBFcnJvclwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IEludmFsaWQgS2V5IEFsZ29yaXRobSBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBQdWJsaWMgS2V5IEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBJbmNvcnJlY3QgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgVW5kZWZpbmVkIFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBTaWduYXR1cmUgSW5jb3JyZWN0IERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBVbnN1cHBvcnRlZCByZWNvdmVyeSBzY2hlbWVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBJbmNvcnJlY3QgVHJhaWxlclwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFVuc3VwcG9ydGVkIERpZ2VzdCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFJJOiBTZWN0b3IgS2V5IENhbm5vdCBGaW5kXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBSSTogU2VjdG9yIEtleSBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUkk6IFNlY3RvciBLZXkgSW5jb21wbGV0ZSBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogTWlzc2luZyBtYW5kYXRvcnkgZGF0YSBQS1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFB1YmxpYyBrZXkgdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDSEFUIHVuc3VwcG9ydGVkIHRlcm1pbmFsIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGludmFsaWQgcGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDUEkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDQVIgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQdWJsaWMga2V5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0hSIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0hBVCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFZhbGlkIGZyb20gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBWYWxpZCB0byBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IEV4dGVuc2lvbnMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxOTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBOb24gbWF0Y2hpbmcgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IHRpbWUgY29kaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBJbmNvcnJlY3QgdXNlIG9mIGdlbmVyYWxpemVkIHRpbWVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEVtcHR5IGlzc3VlclwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRW1wdHkgc3ViamVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogVW5zdXBwb3J0ZWQgY3JpdGljYWwgZXh0ZW5zaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBGb3JjZWQgZGVmYXVsdCBDU0NBIHJvbGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEZvcmNlZCBEZWZhdWx0IERTIHJvbGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCBpc3N1ZXIgc3ViamVjdCBEU1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRHVwbGljYXRpbmcgZXh0ZW5zaW9uc1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFZlcnNpb24gbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgY291bnRyeSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgY29tbW9uIG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIGNvdW50cnkgbm9uIGNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY291bnRyeSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGNvbW1vbiBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY291bnRyeSBub24gY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVXNpbmcgbm9uIGNvbXBsaWFudCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVW5zdXBwb3J0ZWQgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFVuc3VwcG9ydGVkIHB1YmxpYyBrZXkgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Njk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogTWlzc2VkIGV4dGVuc2lvbnNcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBWYWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBVc2luZyBub24gY29tcGxpYW50IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogS2V5IHVzYWdlIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBLZXkgdXNhZ2Ugbm90IGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2UgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIGluY29ycmVjdCB1c2FnZSAxXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIGluY29ycmVjdCB1c2FnZSAyXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIG5vdCBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBwYXRoIExlbkMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIHBhdGggTGVuQyBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBub3QgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBpbmNvcnJlY3QgdXNhZ2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjUzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIEF1dGgga2V5OiBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBBdXRoIGtleTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBBdXRoIGtleTogS2V5IElEIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGtleSBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBrZXkgSUQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogUHJpdmF0ZSBrZXkgVVAgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFByaXZhdGUga2V5IFVQIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFByaXZhdGUga2V5IFVQIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIG5vbiBjb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBETiBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIEROIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIEROIG5vbiBjb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBub24gY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBETiBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgRE4gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBETiBub24gY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogTWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogRG9jIHR5cGVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogRG9jIHR5cGVzIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IERlcnQgcG9saWNpZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ2VydCBwb2xpY2llcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDZXJ0IHBvbGljaWVzIHBvbGljeSBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1JMIGRpc3QgcG9pbnQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IHBvaW50IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBMRFMgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogTERTIHZlcnNpb24gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBVbmljb2RlIHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IFVuaWNvZGUgdmVyc2lvbiBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IERHUE0gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IERHUE0gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBER1BNIHVuZXhwZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBMRFMgdmVyc2lvbiB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IFVuaWNvZGUgdmVyc2lvbiB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IExEUyB2ZXJzaW9uIGluY29uc2lzdGVudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IFVuaWNvZGUgdmVyc2lvbiBpbmNvbnNpc3RlbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVkIGRhdGE6IE9JRCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0Nzc3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVkIGRhdGE6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBEaWdlc3QgYWxnb3JpdGhtcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IERpZ2VzdCBhbGdvcml0aG1zIHVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogU2lnbmVyIGluZm9zIG11bHRpcGxlIGVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0Nzc2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBDZXJ0aWZpY2F0ZXMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogQ2VydGlmaWNhdGVzIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogQ1JMcyBpbmNvcnJlY3QgdXNhZ2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIExEUyBvYmplY3Q6IEluY29ycmVjdCBjb250ZW50IE9JRFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgbnVtYmVyIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgaGFzaCBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBERyBoYXNoIGV4dHJhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NzQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gbWFzdGVyIGxpc3Q6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU0lEIGluY29ycmVjdCBjaG9pY2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNJRCBkaWdlc3QgYWxnb3JpdGhtIG5vdCBsaXN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IE1lc3NhZ2UgZGlnZXN0IGF0dHIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgYXR0ciBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBhdHRyIHZhbHVlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciB2YWx1ZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU2lnbmluZyB0aW1lIGF0dHIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU2lnbmluZyB0aW1lIGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU2lnbmluZyB0aW1lIGF0dHIgdmFsdWVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHJvb3QgaXMgbm90IHRydXN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSBjYW50IGZpbmQgQ1NDQVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHJldm9rZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSBzaWduYXR1cmUgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbjogVW5zdXBwb3J0ZWQgaW1hZ2UgZm9ybWF0XCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRG9jdW1lbnQgdHlwZSB1bmtub3duXCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogSXNzdWluZyBzdGF0ZSBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOYW1lIGlzIHZvaWRcIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOdW1iZXIgaW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogTmF0aW9uYWxpdHkgc3ludGF4IGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9CIHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBTZXggaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9FIHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBPcHRpb25hbCBkYXRhIGluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IEluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IEluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4OTgyNjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCBvd25lciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg5MTcxMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogRm9ybWF0IG93bmVyIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4ODUxNTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCB0eXBlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODc4NjA0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBGb3JtYXQgdHlwZSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODcyMDUxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBUeXBlIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4NjU0OTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IFN1YnR5cGUgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc4NTg5NDQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IFN1YnR5cGUgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg1MjM5MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIGltYWdlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODQ1ODM2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgZm9ybWF0IElEIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4MzkyODMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiB2ZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4MzI3Mjk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBkYXRhIGxlbmd0aCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3Nzk5OTYxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBHZW5kZXJcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzkzNDA4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBFeWUgQ29sb3JcIlxuICAgICAgICAgICAgY2FzZSAtMTg3Nzg2ODU0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBIYWlyIENvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc4MDMwMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBZYXdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzczNzQ3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFBpdGNoXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc2NzE5MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBSb2xsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc2MDY0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBVIFlhd1wiXG4gICAgICAgICAgICBjYXNlIC0xODc3NTQwODY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBQaXRjaFwiXG4gICAgICAgICAgICBjYXNlIC0xODc3NDc1MzI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBSb2xsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc0MDk3OTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgRmFjZSBJbWFnZSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzczNDQyNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgSW1hZ2UgRGF0YSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBVbnN1cHBvcnRlZCBTdGQgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gRGVwcmVjYXRlZCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgRG9tYWluIFBhcmFtcyBVc2luZyBTdGQgUmVmXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgRG9tYWluIFBhcmFtcyBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5mbyBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBQdWJsaWNLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIERvbWFpbiBQYXJhbXMgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5Njk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogVEEgSW5mbyBGaWxlIElEIEZvciBWZXJzaW9uIDJcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogZUlEIFNlY3VyaXR5IFVuc3VwcG9ydGVkIERpZ2VzdCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUkkgaW5mbyBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBSSSBkb21haW4gcGFyYW1zIHVuc3VwcG9ydGVkIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBBQSBpbmZvIGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gdW5zdXBwb3J0ZWQgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gaW5jb25zaXN0ZW50IGFsZ29yaXRobSByZWZlcmVuY2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIE5vIFN0ZCBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBObyBNYXRjaGluZyBEb21haW4gUGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIE5vIFJlcXVpcmVkIE9wdGlvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgQW5vbnltb3VzIEluZm9zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gTm8gTWF0Y2hpbmcgRG9tYWluIFBhcmFtc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vIE1hdGNoaW5nIFB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5jb3JyZWN0IEluZm9zIFF1YW50aXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDYXJkIEluZm8gTG9jYXRvciBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IGVJRCBTZWN1cml0eSBJbmZvIE11bHRpcGxlIEVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUHJpdmlsZWdlZCBUSSBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFByaXZpbGVnZWQgVEkgSW5jb3JyZWN0IFVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFJJIGRvbWFpbiBwYXJhbXMgbXVsdGlwbGUgZW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBTdG9yYWdlIFBBQ0UgSW5mbyBOb24gQ29uc2lzdGFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNDYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBQcm9maWxlIGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IFZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IE5vbiBDVkNBIGRvbWFpbiBwYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzAyMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gVEE6IFBBQ0Ugc3RhdGljIGJpbmRpbmcgdXNlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NDU0OTM0ODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcm9vdCBpcyBub3QgdHJ1c3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIGNhbnQgZmluZCBDU0NBXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NDU0OTM0ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcmV2b2tlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHNpZ25hdHVyZSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0FMUkVBRFlfRE9ORTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSZXF1ZXN0ZWQgb3BlcmF0aW9uIGlzIGFscmVhZHkgZG9uZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9GQUlMRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0Vycm9yX0dyYXBoTWFuYWdlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBDcmVhdGlvbiBvciBjb25uZWN0aW9uIHRvIEdyYXBoIE1hbmFnZXIgQ09NIHNlcnZlciBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9fQ0hJUF9ERVRFQ1RFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBObyBjaGlwIGlzIGRldGVjdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX05PVF9BVkFJTEFCTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfSU5WQUxJRF9QQVJBTUVURVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBwYXJhbWV0ZXIgaW4gRXhlY3V0ZUNvbW1hbmQoKSBjYWxsIGZvdW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX05PVF9JTklUSUFMSVpFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBEZXZpY2UgaXMgdW5pbml0aWFsaXplZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FcnJvcl9Ob3RFbm91Z2hNZW1vcnk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogT3V0IG9mIG1lbW9yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9JTlZBTElEX0RJUkVDVE9SWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIGRpcmVjdG9yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9VTktOT1dOX0NPTU1BTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5rbm93biBjb21tYW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0ZJTEVfSU9fRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBJTyBFcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9CVVNZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJGSUQgaXMgQnVzeVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDE4MTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEZpcm13YXJlIG5lZWQgdG8gYmUgdXBkYXRlZCB3aXRoIG5ld2VyIHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBSZWFkZXIgaXMgdW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBDYXJkIGNhbm5vdCBiZSBjb25uZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBDYXJkIGlzIG5vdCBjb25uZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBPcGVyYXRpb24gaXMgY2FuY2VsbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogQ2FyZCBJcyBCdXN5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogRmFpbGVkIFNtYXJ0IENhcmRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBFeHRMZSBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDM1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNlY3VyZSBNZXNzYWdpbmcgd2FzIG5vdCBhY3RpdmF0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDM1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQV8wMyBcXFwiQXBwbGljYXRpb24gc2VsZWN0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MjAwOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0JfMDEgXFxcIk11dHVhbCBhdXRoZW50aWNhdGlvbiBNQUMgZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDA5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMiBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIGVuY3J5cHRpb24gZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDA5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMyBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4NDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBNQUMgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5ODM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU00gZmFpbHVyZSDigJMgY3J5cHRvZ3JhbSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4Mzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBzZWN1cmVkIHN0YXR1cyBieXRlcyBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBpbmNvcnJlY3QgTUFDXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBpbmNvcnJlY3QgY3J5cHRvZ3JhbVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTm90IFRMViByZXNwb25zZSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBXcm9uZyBkYXRhIGxlbmd0aCAoQVBEVV9JTlNfR0VUX0NIQUxMRU5HRSlcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEFQRFVfSU5TX0lOVEVSTkFMX0FVVEhFTlRJQ0FURSBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBNU0U6U2V0IEtBVCBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBNU0U6U2V0IERTVCBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQU08gQ0VSVElGSUNBVEUgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTVNFOlNldCBBVCBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1Nzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBHRVQgQ0hBTExFTkdFIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEFQRFVfSU5TX0VYVEVSTkFMX0FVVEhFTlRJQ0FURSAoRXh0ZXJuYWwgQXV0aGVudGljYXRpb24pIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEdlbmVyYWwgQXV0aGVudGljaXR5IEZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjM4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEZpbGUgc2VsZWN0aW9uIGZhaWx1cmUgLyBmaWxlIG5vdCBmb3VuZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4NDMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUmVhZGluZyBiZXlvbmQgRU9GIC8gVW5leHBlY3RlZCBFT0ZcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjI1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFJlYWRpbmcgYmV5b25kIEVPRiAvIFVuZXhwZWN0ZWQgRU9GXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTYzODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJbmNvcnJlY3QgUGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTYzNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBObyBSZWZlcmVuY2UgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4MTExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIFN1c3BlbmRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4MTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIEJsb2NrZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1ODQyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBEZWFjdGl2YXR0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjYzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBCbG9ja2VkIDJcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjYzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBEZWFjdGl2YXRlZCAyXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTY2MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgU3VzcGVuZGVkIDJcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NjQwOTUzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MjAwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBOb3QgUGVyZm9ybWVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5OTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogU2Vzc2lvbiBJcyBDbG9zZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCBVbnN1cHBvcnRlZCBPcGVyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCBUeXBlIFVua25vd25cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCBUeXBlIEJhZCBDZXJ0aWZpY2F0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIFR5cGUgTm90IFNldFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFByb2NlZHVyZSBUeXBlIFVua25vd25cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBQcm9jZWR1cmUgVHlwZSBVbnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFByb2NlZHVyZSBUeXBlIE5vdCBTZXRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgS2V5IFVua25vd24gVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBLZXkgVW5zdXBwb3J0ZWQgU00gVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBLZXkgSW5jb3JyZWN0IFNNIFR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgS2V5IFJlc3RyaWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgS2V5IEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIEtleSBOb3QgU2V0XCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUHdkIE1hbmFnZW1lbnQgTm90IEF1dGhvcml6ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgQ29udHJvbCBVbmtub3duVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJlcXVpcmVzIFNNXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUmVxdWlyZXMgUEFDRVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJlcXVpcmVzIENBIEtleXNcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSZXF1aXJlcyBUQVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJlcXVpcmVzIENBXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW5jb3JyZWN0IE9wdGlvbiBDQVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IENBIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRBIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFBIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJJIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFNPIFNpZ25hdHVyZSBDaGVjayBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBIYXNoIENoZWNrIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEludmFsaWQgQXV4IERhdGEgRGF0ZSBPZiBFeHBpcnlcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIEF1eCBEYXRhIERhdGUgT2YgQmlydGhcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIEF1eCBEYXRhIENvbW11bml0eSBJRFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IGVTaWduIFJlcXVpcmVzIEFwcCBTZWxlY3Rpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBlU2lnbiBQSU4gTm90IFNldFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IGVTaWduIFBJTiBOb3QgVmVyaWZpZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MDg2NDY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogTm90IEVub3VnaCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcwMjA5Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk2OTU1MzkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogVW5leHBlY3RlZCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY4ODk4NTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBDb250ZW50cyBVbmV4cGVjdGVkIERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NjgyNDMyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IFdyb25nIFRhZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMDk2NzU4Nzg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogQ2Fubm90IFVzZSBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY2OTMyNDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBDYW5ub3QgUmVhZCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fRklMRV9BQ0NFU1NfREVOSUVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogQWNjZXNzIERlbmllZFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9QYXNzd29yZF9UeXBlID0ge1xuICAgIFBQVF9VTktOT1dOOiAwLFxuICAgIFBQVF9NUlo6IDEsXG4gICAgUFBUX0NBTjogMixcbiAgICBQUFRfUElOOiAzLFxuICAgIFBQVF9QVUs6IDQsXG4gICAgUFBUX1BJTl9FU0lHTjogNSxcbiAgICBQUFRfU0FJOiA2LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSA9IHtcbiAgICBTUFRfRE9DXzkzMDNfRURJVElPTl8yMDA2OiAweDAwMDAwMDAxLFxuICAgIFNQVF9ET0NfOTMwM19MRFNfUEtJX01BSU5URU5BTkNFOiAweDAwMDAwMDAyLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfVGVybWluYWxUeXBlID0ge1xuICAgIFRFVF9VTkRFRklORUQ6IDAsXG4gICAgVEVUX0lOU1BFQ1RJT05fU1lTVEVNOiAxLFxuICAgIFRFVF9BVVRIRU5USUNBVElPTl9URVJNSU5BTDogMixcbiAgICBURVRfU0lHTkFUVVJFX1RFUk1JTkFMOiAzLFxuICAgIFRFVF9VTkFVVEhFTlRJQ0FURURfVEVSTUlOQUw6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9BdXRoZW50aWNpdHkgPSB7XG4gICAgTk9ORTogMCxcbiAgICBVVl9MVU1JTkVTQ0VOQ0U6IDEsXG4gICAgSVJfQjkwMDogMixcbiAgICBJTUFHRV9QQVRURVJOOiA0LFxuICAgIEFYSUFMX1BST1RFQ1RJT046IDgsXG4gICAgVVZfRklCRVJTOiAxNixcbiAgICBJUl9WSVNJQklMSVRZOiAzMixcbiAgICBPQ1JfU0VDVVJJVFlfVEVYVDogNjQsXG4gICAgSVBJOiAxMjgsXG4gICAgUEhPVE9fRU1CRURfVFlQRTogNTEyLFxuICAgIEhPTE9HUkFNUzogNDA5NixcbiAgICBQSE9UT19BUkVBOiA4MTkyLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT046IDMyNzY4LFxuICAgIEJBUkNPREVfRk9STUFUX0NIRUNLOiA2NTUzNixcbiAgICBLSU5FR1JBTTogMTMxMDcyLFxuICAgIEhPTE9HUkFNU19ERVRFQ1RJT046IDUyNDI4OCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0ZpZWxkVmVyaWZpY2F0aW9uUmVzdWx0ID0ge1xuICAgIFJDRl9ESVNBQkxFRDogMCxcbiAgICBSQ0ZfVkVSSUZJRUQ6IDEsXG4gICAgUkNGX05PVF9WRVJJRklFRDogMixcbiAgICBSQ0ZfQ09NUEFSRV9UUlVFOiAzLFxuICAgIFJDRl9DT01QQVJFX0ZBTFNFOiA0LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fTGlnaHRzID0ge1xuICAgIE5PTkU6IDAsXG4gICAgUlBSTV9MSUdIVF9VVjogMTI4LFxuICAgIFJQUk1fTElHSFRfV0hJVEVfRlVMTDogNixcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLlJQUk1fTElHSFRfVVY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVZcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJQUk1fTElHSFRfV0hJVEVfRlVMTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNpYmxlIGxpZ2h0XCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX1Jlc3VsdFR5cGUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FTVBUWTogMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1JBV19JTUFHRTogMSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJTEVfSU1BR0U6IDIsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfT0NSX0VYVEVOREVEOiAzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSQ09ERVM6IDUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9HUkFQSElDUzogNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9URVNUX1FVQUxJVFk6IDcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9UWVBFU19DQU5ESURBVEVTOiA4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQ0hPU0VOX0RPQ1VNRU5UX1RZUEVfQ0FORElEQVRFOiA5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRTX0lORk9fTElTVDogMTAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9PQ1JfTEVYSUNBTF9BTkFMWVpFOiAxNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1JBV19VTkNST1BQRURfSU1BR0U6IDE2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfVklTVUFMX09DUl9FWFRFTkRFRDogMTcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJfQ09ERVNfVEVYVF9EQVRBOiAxOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUl9DT0RFU19JTUFHRV9EQVRBOiAxOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0FVVEhFTlRJQ0lUWTogMjAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FT1NfSU1BR0U6IDIzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFZRVJfSU1BR0U6IDI0LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTUFHTkVUSUNfU1RSSVBFOiAyNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01BR05FVElDX1NUUklQRV9URVhUX0RBVEE6IDI2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklFTERfRklMRV9JTUFHRTogMjcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9EQVRBQkFTRV9DSEVDSzogMjgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSU5HRVJQUklOVF9URU1QTEFURV9JU086IDI5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5QVVRfSU1BR0VfUVVBTElUWTogMzAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9QT1NJVElPTjogODUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9DVVNUT006IDEwMCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfUkFXX0RBVEE6IDEwMSxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfVEVYVF9EQVRBOiAxMDIsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX0lNQUdFX0RBVEE6IDEwMyxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfQklOQVJZX0RBVEE6IDEwNCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfT1JJR0lOQUxfR1JBUEhJQ1M6IDEwNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUkNPREVfUE9TSVRJT046IDYyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX1BPU0lUSU9OOiA2MSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0JMQU5LOiAwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GSUxMOiAxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UTzogMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTVJaOiAzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GQUxTRV9MVU1JTkVTQ0VOQ0U6IDQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fU0lNUExFOiA1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9TVEFUSUM6IDYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX01VTFRJX1NUQVRJQzogNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfRElOQU1JQzogOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9OT1RfSU5URVJSVVBURUQ6IDksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fTk9UX1NISUZURUQ6IDEwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX1NBTUVfQ09MT1JTOiAxMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9JUl9JTlZJU0lCTEU6IDEyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19TSVpFX0NIRUNLOiAxMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19HSE9TVDogMTQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfUkZJRDogMTUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfVklTVUFMOiAxNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkFSQ09ERTogMTcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fRElGRkVSRU5UX0xJTkVTX1RISUNLTkVTUzogMTgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfQ0FNRVJBOiAxOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9SRklEX1ZTX0NBTUVSQTogMjAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0dIT1NUX1BIT1RPOiAyMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQ0xFQVJfR0hPU1RfUEhPVE86IDIyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9JTlZJU0lCTEVfT0JKRUNUOiAyMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTE9XX0NPTlRSQVNUX09CSkVDVDogMjQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX0NPTE9SOiAyNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fU0hBUEU6IDI2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19DT1JORVJTOiAyNyxcbiAgICBET0NVTUVOVF9DQU5DRUxMSU5HX0RFVEVDVE9SOiAyOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVTaWduTWFuYWdlbWVudEFjdGlvbiA9IHtcbiAgICBzbWFVbmRlZmluZWQ6IDAsXG4gICAgc21hQ3JlYXRlUElOOiAxLFxuICAgIHNtYUNoYW5nZVBJTjogMixcbiAgICBzbWFVbmJsb2NrUElOOiAzLFxuICAgIHNtYVRlcm1pbmF0ZVBJTjogNCxcbiAgICBzbWFHZW5lcmF0ZUtleXM6IDUsXG4gICAgc21hVGVybWluYXRlS2V5czogNixcbiAgICBzbWFTaWduRGF0YTogNyxcbn1cblxuZXhwb3J0IGNvbnN0IGVWaXN1YWxGaWVsZFR5cGUgPSB7XG4gICAgRlRfRE9DVU1FTlRfQ0xBU1NfQ09ERTogMCxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX0NPREU6IDEsXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSOiAyLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZOiAzLFxuICAgIEZUX0RBVEVfT0ZfSVNTVUU6IDQsXG4gICAgRlRfREFURV9PRl9CSVJUSDogNSxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSDogNixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVI6IDcsXG4gICAgRlRfU1VSTkFNRTogOCxcbiAgICBGVF9HSVZFTl9OQU1FUzogOSxcbiAgICBGVF9NT1RIRVJTX05BTUU6IDEwLFxuICAgIEZUX05BVElPTkFMSVRZOiAxMSxcbiAgICBGVF9TRVg6IDEyLFxuICAgIEZUX0hFSUdIVDogMTMsXG4gICAgRlRfV0VJR0hUOiAxNCxcbiAgICBGVF9FWUVTX0NPTE9SOiAxNSxcbiAgICBGVF9IQUlSX0NPTE9SOiAxNixcbiAgICBGVF9BRERSRVNTOiAxNyxcbiAgICBGVF9ET05PUjogMTgsXG4gICAgRlRfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjogMTksXG4gICAgRlRfRExfQ0xBU1M6IDIwLFxuICAgIEZUX0RMX0VORE9SU0VEOiAyMSxcbiAgICBGVF9ETF9SRVNUUklDVElPTl9DT0RFOiAyMixcbiAgICBGVF9ETF9VTkRFUl8yMV9EQVRFOiAyMyxcbiAgICBGVF9BVVRIT1JJVFk6IDI0LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTOiAyNSxcbiAgICBGVF9OQVRJT05BTElUWV9DT0RFOiAyNixcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVI6IDI3LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSOiAyOCxcbiAgICBGVF9WSVNBX0lEOiAyOSxcbiAgICBGVF9WSVNBX0NMQVNTOiAzMCxcbiAgICBGVF9WSVNBX1NVQl9DTEFTUzogMzEsXG4gICAgRlRfTVJaX1NUUklOR18xOiAzMixcbiAgICBGVF9NUlpfU1RSSU5HXzI6IDMzLFxuICAgIEZUX01SWl9TVFJJTkdfMzogMzQsXG4gICAgRlRfTVJaX1RZUEU6IDM1LFxuICAgIEZUX09QVElPTkFMX0RBVEE6IDM2LFxuICAgIEZUX0RPQ1VNRU5UX0NMQVNTX05BTUU6IDM3LFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfTkFNRTogMzgsXG4gICAgRlRfUExBQ0VfT0ZfSVNTVUU6IDM5LFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS1NVTTogNDAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9DSEVDS1NVTTogNDEsXG4gICAgRlRfREFURV9PRl9FWFBJUllfQ0hFQ0tTVU06IDQyLFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS1NVTTogNDMsXG4gICAgRlRfRklOQUxfQ0hFQ0tTVU06IDQ0LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUl9DSEVDS1NVTTogNDUsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVJfQ0hFQ0tTVU06IDQ2LFxuICAgIEZUX1ZJU0FfSURfQ0hFQ0tTVU06IDQ3LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX0NIRUNLU1VNOiA0OCxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLU1VNOiA0OSxcbiAgICBGVF9PVEhFUjogNTAsXG4gICAgRlRfTVJaX1NUUklOR1M6IDUxLFxuICAgIEZUX05BTUVfU1VGRklYOiA1MixcbiAgICBGVF9OQU1FX1BSRUZJWDogNTMsXG4gICAgRlRfREFURV9PRl9JU1NVRV9DSEVDS1NVTTogNTQsXG4gICAgRlRfREFURV9PRl9JU1NVRV9DSEVDS19ESUdJVDogNTUsXG4gICAgRlRfRE9DVU1FTlRfU0VSSUVTOiA1NixcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSOiA1NyxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfTU9ERUw6IDU4LFxuICAgIEZUX1JFR19DRVJUX0NBUl9DT0xPUjogNTksXG4gICAgRlRfUkVHX0NFUlRfQk9EWV9OVU1CRVI6IDYwLFxuICAgIEZUX1JFR19DRVJUX0NBUl9UWVBFOiA2MSxcbiAgICBGVF9SRUdfQ0VSVF9NQVhfV0VJR0hUOiA2MixcbiAgICBGVF9SRUdfQ0VSVF9XRUlHSFQ6IDYzLFxuICAgIEZUX0FERFJFU1NfQVJFQTogNjQsXG4gICAgRlRfQUREUkVTU19TVEFURTogNjUsXG4gICAgRlRfQUREUkVTU19CVUlMRElORzogNjYsXG4gICAgRlRfQUREUkVTU19IT1VTRTogNjcsXG4gICAgRlRfQUREUkVTU19GTEFUOiA2OCxcbiAgICBGVF9QTEFDRV9PRl9SRUdJU1RSQVRJT046IDY5LFxuICAgIEZUX0RBVEVfT0ZfUkVHSVNUUkFUSU9OOiA3MCxcbiAgICBGVF9SRVNJREVOVF9GUk9NOiA3MSxcbiAgICBGVF9SRVNJREVOVF9VTlRJTDogNzIsXG4gICAgRlRfQVVUSE9SSVRZX0NPREU6IDczLFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX0FSRUE6IDc0LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX1NUQVRFX0NPREU6IDc1LFxuICAgIEZUX0FERFJFU1NfU1RSRUVUOiA3NixcbiAgICBGVF9BRERSRVNTX0NJVFk6IDc3LFxuICAgIEZUX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6IDc4LFxuICAgIEZUX0FERFJFU1NfUE9TVEFMX0NPREU6IDc5LFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS19ESUdJVDogODAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9DSEVDS19ESUdJVDogODEsXG4gICAgRlRfREFURV9PRl9FWFBJUllfQ0hFQ0tfRElHSVQ6IDgyLFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS19ESUdJVDogODMsXG4gICAgRlRfRklOQUxfQ0hFQ0tfRElHSVQ6IDg0LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUl9DSEVDS19ESUdJVDogODUsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDg2LFxuICAgIEZUX1ZJU0FfSURfQ0hFQ0tfRElHSVQ6IDg3LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX0NIRUNLX0RJR0lUOiA4OCxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLX0RJR0lUOiA4OSxcbiAgICBGVF9QRVJNSVRfRExfQ0xBU1M6IDkwLFxuICAgIEZUX1BFUk1JVF9EQVRFX09GX0VYUElSWTogOTEsXG4gICAgRlRfUEVSTUlUX0lERU5USUZJRVI6IDkyLFxuICAgIEZUX1BFUk1JVF9EQVRFX09GX0lTU1VFOiA5MyxcbiAgICBGVF9QRVJNSVRfUkVTVFJJQ1RJT05fQ09ERTogOTQsXG4gICAgRlRfUEVSTUlUX0VORE9SU0VEOiA5NSxcbiAgICBGVF9JU1NVRV9USU1FU1RBTVA6IDk2LFxuICAgIEZUX05VTUJFUl9PRl9EVVBMSUNBVEVTOiA5NyxcbiAgICBGVF9NRURJQ0FMX0lORElDQVRPUl9DT0RFUzogOTgsXG4gICAgRlRfTk9OX1JFU0lERU5UX0lORElDQVRPUjogOTksXG4gICAgRlRfVklTQV9UWVBFOiAxMDAsXG4gICAgRlRfVklTQV9WQUxJRF9GUk9NOiAxMDEsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTDogMTAyLFxuICAgIEZUX0RVUkFUSU9OX09GX1NUQVk6IDEwMyxcbiAgICBGVF9OVU1CRVJfT0ZfRU5UUklFUzogMTA0LFxuICAgIEZUX0RBWTogMTA1LFxuICAgIEZUX01PTlRIOiAxMDYsXG4gICAgRlRfWUVBUjogMTA3LFxuICAgIEZUX1VOSVFVRV9DVVNUT01FUl9JREVOVElGSUVSOiAxMDgsXG4gICAgRlRfQ09NTUVSQ0lBTF9WRUhJQ0xFX0NPREVTOiAxMDksXG4gICAgRlRfQUtBX0RBVEVfT0ZfQklSVEg6IDExMCxcbiAgICBGVF9BS0FfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjogMTExLFxuICAgIEZUX0FLQV9TVVJOQU1FOiAxMTIsXG4gICAgRlRfQUtBX0dJVkVOX05BTUVTOiAxMTMsXG4gICAgRlRfQUtBX05BTUVfU1VGRklYOiAxMTQsXG4gICAgRlRfQUtBX05BTUVfUFJFRklYOiAxMTUsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX1NUUkVFVDogMTE2LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19DSVRZOiAxMTcsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX0pVUklTRElDVElPTl9DT0RFOiAxMTgsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX1BPU1RBTF9DT0RFOiAxMTksXG4gICAgRlRfQVVESVRfSU5GT1JNQVRJT046IDEyMCxcbiAgICBGVF9JTlZFTlRPUllfTlVNQkVSOiAxMjEsXG4gICAgRlRfUkFDRV9FVEhOSUNJVFk6IDEyMixcbiAgICBGVF9KVVJJU0RJQ1RJT05fVkVISUNMRV9DTEFTUzogMTIzLFxuICAgIEZUX0pVUklTRElDVElPTl9FTkRPUlNFTUVOVF9DT0RFOiAxMjQsXG4gICAgRlRfSlVSSVNESUNUSU9OX1JFU1RSSUNUSU9OX0NPREU6IDEyNSxcbiAgICBGVF9GQU1JTFlfTkFNRTogMTI2LFxuICAgIEZUX0dJVkVOX05BTUVTX1JVUzogMTI3LFxuICAgIEZUX1ZJU0FfSURfUlVTOiAxMjgsXG4gICAgRlRfRkFUSEVSU19OQU1FOiAxMjksXG4gICAgRlRfRkFUSEVSU19OQU1FX1JVUzogMTMwLFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX1JVUzogMTMxLFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX1JVUzogMTMyLFxuICAgIEZUX0FVVEhPUklUWV9SVVM6IDEzMyxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX0NPREVfTlVNRVJJQzogMTM0LFxuICAgIEZUX05BVElPTkFMSVRZX0NPREVfTlVNRVJJQzogMTM1LFxuICAgIEZUX0VOR0lORV9QT1dFUjogMTM2LFxuICAgIEZUX0VOR0lORV9WT0xVTUU6IDEzNyxcbiAgICBGVF9DSEFTU0lTX05VTUJFUjogMTM4LFxuICAgIEZUX0VOR0lORV9OVU1CRVI6IDEzOSxcbiAgICBGVF9FTkdJTkVfTU9ERUw6IDE0MCxcbiAgICBGVF9WRUhJQ0xFX0NBVEVHT1JZOiAxNDEsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVI6IDE0MixcbiAgICBGVF9DT05UUk9MX05POiAxNDMsXG4gICAgRlRfUEFSUkVOVFNfR0lWRU5fTkFNRVM6IDE0NCxcbiAgICBGVF9TRUNPTkRfU1VSTkFNRTogMTQ1LFxuICAgIEZUX01JRERMRV9OQU1FOiAxNDYsXG4gICAgRlRfUkVHX0NFUlRfVklOOiAxNDcsXG4gICAgRlRfUkVHX0NFUlRfVklOX0NIRUNLX0RJR0lUOiAxNDgsXG4gICAgRlRfUkVHX0NFUlRfVklOX0NIRUNLU1VNOiAxNDksXG4gICAgRlRfTElORV8xX0NIRUNLX0RJR0lUOiAxNTAsXG4gICAgRlRfTElORV8yX0NIRUNLX0RJR0lUOiAxNTEsXG4gICAgRlRfTElORV8zX0NIRUNLX0RJR0lUOiAxNTIsXG4gICAgRlRfTElORV8xX0NIRUNLU1VNOiAxNTMsXG4gICAgRlRfTElORV8yX0NIRUNLU1VNOiAxNTQsXG4gICAgRlRfTElORV8zX0NIRUNLU1VNOiAxNTUsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS19ESUdJVDogMTU2LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tTVU06IDE1NyxcbiAgICBGVF9SRUdfQ0VSVF9WRUhJQ0xFX0lUU19DT0RFOiAxNTgsXG4gICAgRlRfQ0FSRF9BQ0NFU1NfTlVNQkVSOiAxNTksXG4gICAgRlRfTUFSSVRBTF9TVEFUVVM6IDE2MCxcbiAgICBGVF9DT01QQU5ZX05BTUU6IDE2MSxcbiAgICBGVF9TUEVDSUFMX05PVEVTOiAxNjIsXG4gICAgRlRfU1VSTkFNRV9PRl9TUE9TRTogMTYzLFxuICAgIEZUX1RSQUNLSU5HX05VTUJFUjogMTY0LFxuICAgIEZUX0JPT0tMRVRfTlVNQkVSOiAxNjUsXG4gICAgRlRfQ0hJTERSRU46IDE2NixcbiAgICBGVF9DT1BZOiAxNjcsXG4gICAgRlRfU0VSSUFMX05VTUJFUjogMTY4LFxuICAgIEZUX0RPU1NJRVJfTlVNQkVSOiAxNjksXG4gICAgRlRfQUtBX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTOiAxNzAsXG4gICAgRlRfVEVSUklUT1JJQUxfVkFMSURJVFk6IDE3MSxcbiAgICBGVF9NUlpfU1RSSU5HU19XSVRIX0NPUlJFQ1RfQ0hFQ0tfU1VNUzogMTcyLFxuICAgIEZUX0RMX0NETF9SRVNUUklDVElPTl9DT0RFOiAxNzMsXG4gICAgRlRfRExfVU5ERVJfMThfREFURTogMTc0LFxuICAgIEZUX0RMX1JFQ09SRF9DUkVBVEVEOiAxNzUsXG4gICAgRlRfRExfRFVQTElDQVRFX0RBVEU6IDE3NixcbiAgICBGVF9ETF9JU1NfVFlQRTogMTc3LFxuICAgIEZUX01JTElUQVJZX0JPT0tfTlVNQkVSOiAxNzgsXG4gICAgRlRfREVTVElOQVRJT046IDE3OSxcbiAgICBGVF9CTE9PRF9HUk9VUDogMTgwLFxuICAgIEZUX1NFUVVFTkNFX05VTUJFUjogMTgxLFxuICAgIEZUX1JFR19DRVJUX0JPRFlfVFlQRTogMTgyLFxuICAgIEZUX1JFR19DRVJUX0NBUl9NQVJLOiAxODMsXG4gICAgRlRfVFJBTlNBQ1RJT05fTlVNQkVSOiAxODQsXG4gICAgRlRfQUdFOiAxODUsXG4gICAgRlRfRk9MSU9fTlVNQkVSOiAxODYsXG4gICAgRlRfVk9URVJfS0VZOiAxODcsXG4gICAgRlRfQUREUkVTU19NVU5JQ0lQQUxJVFk6IDE4OCxcbiAgICBGVF9BRERSRVNTX0xPQ0FUSU9OOiAxODksXG4gICAgRlRfU0VDVElPTjogMTkwLFxuICAgIEZUX09DUl9OVU1CRVI6IDE5MSxcbiAgICBGVF9GRURFUkFMX0VMRUNUSU9OUzogMTkyLFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVI6IDE5MyxcbiAgICBGVF9PUFRJT05BTF9EQVRBX0NIRUNLU1VNOiAxOTQsXG4gICAgRlRfT1BUSU9OQUxfREFUQV9DSEVDS19ESUdJVDogMTk1LFxuICAgIEZUX1ZJU0FfTlVNQkVSOiAxOTYsXG4gICAgRlRfVklTQV9OVU1CRVJfQ0hFQ0tTVU06IDE5NyxcbiAgICBGVF9WSVNBX05VTUJFUl9DSEVDS19ESUdJVDogMTk4LFxuICAgIEZUX1ZPVEVSOiAxOTksXG4gICAgRlRfUFJFVklPVVNfVFlQRTogMjAwLFxuICAgIEZUX0ZJRUxEX0ZST01fTVJaOiAyMjAsXG4gICAgRlRfQ1VSUkVOVF9EQVRFOiAyMjEsXG4gICAgRlRfU1RBVFVTX0RBVEVfT0ZfRVhQSVJZOiAyNTEsXG4gICAgRlRfQkFOS05PVEVfTlVNQkVSOiAyNTIsXG4gICAgRlRfQ1NDX0NPREU6IDI1MyxcbiAgICBGVF9BUlRJU1RJQ19OQU1FOiAyNTQsXG4gICAgRlRfQUNBREVNSUNfVElUTEU6IDI1NSxcbiAgICBGVF9BRERSRVNTX0NPVU5UUlk6IDI1NixcbiAgICBGVF9BRERSRVNTX1pJUENPREU6IDI1NyxcbiAgICBGVF9FX0lEX1JFU0lERU5DRV9QRVJNSVRfMTogMjU4LFxuICAgIEZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8yOiAyNTksXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9TVFJFRVQ6IDI2MCxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NJVFk6IDI2MSxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUQVRFOiAyNjIsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9DT1VOVFJZOiAyNjMsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9aSVBDT0RFOiAyNjQsXG4gICAgRlRfQ0RMX0NMQVNTOiAyNjUsXG4gICAgRlRfRExfVU5ERVJfMTlfREFURTogMjY2LFxuICAgIEZUX1dFSUdIVF9QT1VORFM6IDI2NyxcbiAgICBGVF9MSU1JVEVEX0RVUkFUSU9OX0RPQ1VNRU5UX0lORElDQVRPUjogMjY4LFxuICAgIEZUX0VORE9SU0VNRU5UX0VYUElSQVRJT05fREFURTogMjY5LFxuICAgIEZUX1JFVklTSU9OX0RBVEU6IDI3MCxcbiAgICBGVF9DT01QTElBTkNFX1RZUEU6IDI3MSxcbiAgICBGVF9GQU1JTFlfTkFNRV9UUlVOQ0FUSU9OOiAyNzIsXG4gICAgRlRfRklSU1RfTkFNRV9UUlVOQ0FUSU9OOiAyNzMsXG4gICAgRlRfTUlERExFX05BTUVfVFJVTkNBVElPTjogMjc0LFxuICAgIEZUX0VYQU1fREFURTogMjc1LFxuICAgIEZUX09SR0FOSVpBVElPTjogMjc2LFxuICAgIEZUX0RFUEFSVE1FTlQ6IDI3NyxcbiAgICBGVF9QQVlfR1JBREU6IDI3OCxcbiAgICBGVF9SQU5LOiAyNzksXG4gICAgRlRfQkVORUZJVFNfTlVNQkVSOiAyODAsXG4gICAgRlRfU1BPTlNPUl9TRVJWSUNFOiAyODEsXG4gICAgRlRfU1BPTlNPUl9TVEFUVVM6IDI4MixcbiAgICBGVF9TUE9OU09SOiAyODMsXG4gICAgRlRfUkVMQVRJT05TSElQOiAyODQsXG4gICAgRlRfVVNDSVM6IDI4NSxcbiAgICBGVF9DQVRFR09SWTogMjg2LFxuICAgIEZUX0NPTkRJVElPTlM6IDI4NyxcbiAgICBGVF9JREVOVElGSUVSOiAyODgsXG4gICAgRlRfQ09ORklHVVJBVElPTjogMjg5LFxuICAgIEZUX0RJU0NSRVRJT05BUllfREFUQTogMjkwLFxuICAgIEZUX0xJTkVfMV9PUFRJT05BTF9EQVRBOiAyOTEsXG4gICAgRlRfTElORV8yX09QVElPTkFMX0RBVEE6IDI5MixcbiAgICBGVF9MSU5FXzNfT1BUSU9OQUxfREFUQTogMjkzLFxuICAgIEZUX0VRVl9DT0RFOiAyOTQsXG4gICAgRlRfQUxUX0NPREU6IDI5NSxcbiAgICBGVF9CSU5BUllfQ09ERTogMjk2LFxuICAgIEZUX1BTRVVET19DT0RFOiAyOTcsXG4gICAgRlRfRkVFOiAyOTgsXG4gICAgRlRfU1RBTVBfTlVNQkVSOiAyOTksXG4gICAgRlRfU0JIX1NFQ1VSSVRZT1BUSU9OUzogMzAwLFxuICAgIEZUX1NCSF9JTlRFR1JJVFlPUFRJT05TOiAzMDEsXG4gICAgRlRfREFURV9PRl9DUkVBVElPTjogMzAyLFxuICAgIEZUX1ZBTElESVRZX1BFUklPRDogMzAzLFxuICAgIEZUX1BBVFJPTl9IRUFERVJfVkVSU0lPTjogMzA0LFxuICAgIEZUX0JEQl9UWVBFOiAzMDUsXG4gICAgRlRfQklPTUVUUklDX1RZUEU6IDMwNixcbiAgICBGVF9CSU9NRVRSSUNfU1VCVFlQRTogMzA3LFxuICAgIEZUX0JJT01FVFJJQ19QUk9EVUNUSUQ6IDMwOCxcbiAgICBGVF9CSU9NRVRSSUNfRk9STUFUX09XTkVSOiAzMDksXG4gICAgRlRfQklPTUVUUklDX0ZPUk1BVF9UWVBFOiAzMTAsXG4gICAgRlRfUEhPTkU6IDMxMSxcbiAgICBGVF9QUk9GRVNTSU9OOiAzMTIsXG4gICAgRlRfVElUTEU6IDMxMyxcbiAgICBGVF9QRVJTT05BTF9TVU1NQVJZOiAzMTQsXG4gICAgRlRfT1RIRVJfVkFMSURfSUQ6IDMxNSxcbiAgICBGVF9DVVNUT0RZX0lORk86IDMxNixcbiAgICBGVF9PVEhFUl9OQU1FOiAzMTcsXG4gICAgRlRfT0JTRVJWQVRJT05TOiAzMTgsXG4gICAgRlRfVEFYOiAzMTksXG4gICAgRlRfREFURV9PRl9QRVJTT05BTElaQVRJT046IDMyMCxcbiAgICBGVF9QRVJTT05BTElaQVRJT05fU046IDMyMSxcbiAgICBGVF9PVEhFUlBFUlNPTl9OQU1FOiAzMjIsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfREFURV9PRl9SRUNPUkQ6IDMyMyxcbiAgICBGVF9QRVJTT05UT05PVElGWV9OQU1FOiAzMjQsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfUEhPTkU6IDMyNSxcbiAgICBGVF9QRVJTT05UT05PVElGWV9BRERSRVNTOiAzMjYsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfSVNTVUVSOiAzMjcsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfU1VCSkVDVDogMzI4LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1ZBTElERlJPTTogMzI5LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1ZBTElEVE86IDMzMCxcbiAgICBGVF9WUkNfREFUQU9CSkVDVF9FTlRSWTogMzMxLFxuICAgIEZUX1RZUEVfQVBQUk9WQUxfTlVNQkVSOiAzMzIsXG4gICAgRlRfQURNSU5JU1RSQVRJVkVfTlVNQkVSOiAzMzMsXG4gICAgRlRfRE9DVU1FTlRfRElTQ1JJTUlOQVRPUjogMzM0LFxuICAgIEZUX0RBVEFfRElTQ1JJTUlOQVRPUjogMzM1LFxuICAgIEZUX0lTT19JU1NVRVJfSURfTlVNQkVSOiAzMzYsXG4gICAgRlRfR05JQl9OVU1CRVI6IDM0MCxcbiAgICBGVF9ERVBUX05VTUJFUjogMzQxLFxuICAgIEZUX1RFTEVYX0NPREU6IDM0MixcbiAgICBGVF9BTExFUkdJRVM6IDM0MyxcbiAgICBGVF9TUF9DT0RFOiAzNDQsXG4gICAgRlRfQ09VUlRfQ09ERTogMzQ1LFxuICAgIEZUX0NUWTogMzQ2LFxuICAgIEZUX1NQT05TT1JfU1NOOiAzNDcsXG4gICAgRlRfRE9fRF9OVU1CRVI6IDM0OCxcbiAgICBGVF9NQ19OT1ZJQ0VfREFURTogMzQ5LFxuICAgIEZUX0RVRl9OVU1CRVI6IDM1MCxcbiAgICBGVF9BR1k6IDM1MSxcbiAgICBGVF9QTlJfQ09ERTogMzUyLFxuICAgIEZUX0ZST01fQUlSUE9SVF9DT0RFOiAzNTMsXG4gICAgRlRfVE9fQUlSUE9SVF9DT0RFOiAzNTQsXG4gICAgRlRfRkxJR0hUX05VTUJFUjogMzU1LFxuICAgIEZUX0RBVEVfT0ZfRkxJR0hUOiAzNTYsXG4gICAgRlRfU0VBVF9OVU1CRVI6IDM1NyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0JPQVJESU5HX1BBU1M6IDM1OCxcbiAgICBGVF9DQ1dfVU5USUw6IDM1OSxcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLU1VNOiAzNjAsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS19ESUdJVDogMzYxLFxuICAgIEZUX1JPT01fTlVNQkVSOiAzNjIsXG4gICAgRlRfUkVMSUdJT046IDM2MyxcbiAgICBGVF9SRU1BSU5ERVJfVEVSTTogMzY0LFxuICAgIEZUX0VMRUNUUk9OSUNfVElDS0VUX0lORElDQVRPUjogMzY1LFxuICAgIEZUX0NPTVBBUlRNRU5UX0NPREU6IDM2NixcbiAgICBGVF9DSEVDS19JTl9TRVFVRU5DRV9OVU1CRVI6IDM2NyxcbiAgICBGVF9BSVJMSU5FX0RFU0lHTkFUT1JfT0ZfQk9BUkRJTkdfUEFTU19JU1NVRVI6IDM2OCxcbiAgICBGVF9BSVJMSU5FX05VTUVSSUNfQ09ERTogMzY5LFxuICAgIEZUX1RJQ0tFVF9OVU1CRVI6IDM3MCxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9BSVJMSU5FX0RFU0lHTkFUT1I6IDM3MSxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9OVU1CRVI6IDM3MixcbiAgICBGVF9GUkVFX0JBR0dBR0VfQUxMT1dBTkNFOiAzNzMsXG4gICAgRlRfUERGXzQxN19DT0RFQzogMzc0LFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLU1VNOiAzNzUsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDM3NixcbiAgICBGVF9WRVRFUkFOOiAzNzcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfRlJPTTogMzc4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX1RPOiAzNzksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfTk9URVM6IDM4MCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfRlJPTTogMzgxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9UTzogMzgyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9OT1RFUzogMzgzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9GUk9NOiAzODQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX1RPOiAzODUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX05PVEVTOiAzODYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRlJPTTogMzg3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX1RPOiAzODgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfTk9URVM6IDM4OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfRlJPTTogMzkwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19UTzogMzkxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19OT1RFUzogMzkyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0ZST006IDM5MyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9UTzogMzk0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX05PVEVTOiAzOTUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX0ZST006IDM5NixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfVE86IDM5NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfTk9URVM6IDM5OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX0ZST006IDM5OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX1RPOiA0MDAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9OT1RFUzogNDAxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfRlJPTTogNDAyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfVE86IDQwMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX05PVEVTOiA0MDQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9GUk9NOiA0MDUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9UTzogNDA2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfTk9URVM6IDQwNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX0ZST006IDQwOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX1RPOiA0MDksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9OT1RFUzogNDEwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfRlJPTTogNDExLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfVE86IDQxMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX05PVEVTOiA0MTMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX0ZST006IDQxNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fVE86IDQxNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fTk9URVM6IDQxNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfRlJPTTogNDE3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9UTzogNDE4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9OT1RFUzogNDE5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9GUk9NOiA0MjAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX1RPOiA0MjEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX05PVEVTOiA0MjIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9GUk9NOiA0MjMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9UTzogNDI0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fTk9URVM6IDQyNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9GUk9NOiA0MjYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfVE86IDQyNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9OT1RFUzogNDI4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX0ZST006IDQyOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9UTzogNDMwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX05PVEVTOiA0MzEsXG4gICAgRlRfU1VSTkFNRV9BVF9CSVJUSDogNDMyLFxuICAgIEZUX0NJVklMX1NUQVRVUzogNDMzLFxuICAgIEZUX05VTUJFUl9PRl9TRUFUUzogNDM0LFxuICAgIEZUX05VTUJFUl9PRl9TVEFORElOR19QTEFDRVM6IDQzNSxcbiAgICBGVF9NQVhfU1BFRUQ6IDQzNixcbiAgICBGVF9GVUVMX1RZUEU6IDQzNyxcbiAgICBGVF9FQ19FTlZJUk9OTUVOVEFMX1RZUEU6IDQzOCxcbiAgICBGVF9QT1dFUl9XRUlHSFRfUkFUSU86IDQzOSxcbiAgICBGVF9NQVhfTUFTU19PRl9UUkFJTEVSX0JSQUtFRDogNDQwLFxuICAgIEZUX01BWF9NQVNTX09GX1RSQUlMRVJfVU5CUkFLRUQ6IDQ0MSxcbiAgICBGVF9UUkFOU01JU1NJT05fVFlQRTogNDQyLFxuICAgIEZUX1RSQUlMRVJfSElUQ0g6IDQ0MyxcbiAgICBGVF9BQ0NPTVBBTklFRF9CWTogNDQ0LFxuICAgIEZUX1BPTElDRV9ESVNUUklDVDogNDQ1LFxuICAgIEZUX0ZJUlNUX0lTU1VFX0RBVEU6IDQ0NixcbiAgICBGVF9QQVlMT0FEX0NBUEFDSVRZOiA0NDcsXG4gICAgRlRfTlVNQkVSX09GX0FYRUxTOiA0NDgsXG4gICAgRlRfUEVSTUlTU0lCTEVfQVhMRV9MT0FEOiA0NDksXG4gICAgRlRfUFJFQ0lOQ1Q6IDQ1MCxcbiAgICBGVF9JTlZJVEVEX0JZOiA0NTEsXG4gICAgRlRfUFVSUE9TRV9PRl9FTlRSWTogNDUyLFxuICAgIEZUX1NLSU5fQ09MT1I6IDQ1MyxcbiAgICBGVF9DT01QTEVYSU9OOiA0NTQsXG4gICAgRlRfQUlSUE9SVF9GUk9NOiA0NTUsXG4gICAgRlRfQUlSUE9SVF9UTzogNDU2LFxuICAgIEZUX0FJUkxJTkVfTkFNRTogNDU3LFxuICAgIEZUX0FJUkxJTkVfTkFNRV9GUkVRVUVOVF9GTFlFUjogNDU4LFxuICAgIEZUX0xJQ0VOU0VfTlVNQkVSOiA0NTksXG4gICAgRlRfSU5fVEFOS1M6IDQ2MCxcbiAgICBGVF9FWEVQVF9JTl9UQU5LUzogNDYxLFxuICAgIEZUX0ZBU1RfVFJBQ0s6IDQ2MixcbiAgICBGVF9PV05FUjogNDYzLFxuICAgIEZUX01SWl9TVFJJTkdTX0lDQU9fUkZJRDogNDY0LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFOiA0NjUsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tTVU06IDQ2NixcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS19ESUdJVDogNDY3LFxuICAgIEZUX0NFTlRVUllfREFURV9PRl9CSVJUSDogNDY4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19GUk9NOiA0NjksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX1RPOiA0NzAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX05PVEVTOiA0NzEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX0ZST006IDQ3MixcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfVE86IDQ3MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfTk9URVM6IDQ3NCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfRlJPTTogNDc1LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9UTzogNDc2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9OT1RFUzogNDc3LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9GUk9NOiA0NzgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX1RPOiA0NzksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX05PVEVTOiA0ODAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9GUk9NOiA0ODEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9UTzogNDgyLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfTk9URVM6IDQ4MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19GUk9NOiA0ODQsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfVE86IDQ4NSxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19OT1RFUzogNDg2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX0ZST006IDQ4NyxcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9UTzogNDg4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX05PVEVTOiA0ODksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0xDX0ZST006IDQ5MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfTENfVE86IDQ5MSxcbiAgICBGVF9ETENfTEFTU0NPREVfTENfTk9URVM6IDQ5MixcbiAgICBGVF9CQU5LQ0FSRE5VTUJFUjogNDkzLFxuICAgIEZUX0JBTktDQVJEVkFMSURUSFJVOiA0OTQsXG4gICAgRlRfVEFYX05VTUJFUjogNDk1LFxuICAgIEZUX0hFQUxUSF9OVU1CRVI6IDQ5NixcbiAgICBGVF9HUkFOREZBVEhFUk5BTUU6IDQ5NyxcbiAgICBGVF9TRUxFQ1RFRV9JTkRJQ0FUT1I6IDQ5OCxcbiAgICBGVF9NT1RIRVJfU1VSTkFNRTogNDk5LFxuICAgIEZUX01PVEhFUl9HSVZFTk5BTUU6IDUwMCxcbiAgICBGVF9GQVRIRVJfU1VSTkFNRTogNTAxLFxuICAgIEZUX0ZBVEhFUl9HSVZFTk5BTUU6IDUwMixcbiAgICBGVF9NT1RIRVJfREFURU9GQklSVEg6IDUwMyxcbiAgICBGVF9GQVRIRVJfREFURU9GQklSVEg6IDUwNCxcbiAgICBGVF9NT1RIRVJfUEVSU09OQUxOVU1CRVI6IDUwNSxcbiAgICBGVF9GQVRIRVJfUEVSU09OQUxOVU1CRVI6IDUwNixcbiAgICBGVF9NT1RIRVJfUExBQ0VPRkJJUlRIOiA1MDcsXG4gICAgRlRfRkFUSEVSX1BMQUNFT0ZCSVJUSDogNTA4LFxuICAgIEZUX01PVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTA5LFxuICAgIEZUX0ZBVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTEwLFxuICAgIEZUX0RBVEVfRklSU1RfUkVORVdBTDogNTExLFxuICAgIEZUX0RBVEVfU0VDT05EX1JFTkVXQUw6IDUxMixcbiAgICBGVF9QTEFDRV9PRl9FWEFNSU5BVElPTjogNTEzLFxuICAgIEZUX0FQUExJQ0FUSU9OX05VTUJFUjogNTE0LFxuICAgIEZUX1ZPVUNIRVJfTlVNQkVSOiA1MTUsXG4gICAgRlRfQVVUSE9SSVpBVElPTl9OVU1CRVI6IDUxNixcbiAgICBGVF9GQUNVTFRZOiA1MTcsXG4gICAgRlRfRk9STV9PRl9FRFVDQVRJT046IDUxOCxcbiAgICBGVF9ETklfTlVNQkVSOiA1MTksXG4gICAgRlRfUkVUSVJFTUVOVF9OVU1CRVI6IDUyMCxcbiAgICBGVF9QUk9GRVNTSU9OQUxfSURfTlVNQkVSOiA1MjEsXG4gICAgRlRfQUdFX0FUX0lTU1VFOiA1MjIsXG4gICAgRlRfWUVBUlNfU0lOQ0VfSVNTVUU6IDUyMyxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfRlJPTTogNTI0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9OT1RFUzogNTI1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9UTzogNTI2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX0ZST006IDUyNyxcbiAgICBGVF9ETENMQVNTQ09ERV9DM19OT1RFUzogNTI4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX1RPOiA1MjksXG4gICAgRlRfRExDTEFTU0NPREVfRV9GUk9NOiA1MzAsXG4gICAgRlRfRExDTEFTU0NPREVfRV9OT1RFUzogNTMxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfVE86IDUzMixcbiAgICBGVF9ETENMQVNTQ09ERV9GX0ZST006IDUzMyxcbiAgICBGVF9ETENMQVNTQ09ERV9GX05PVEVTOiA1MzQsXG4gICAgRlRfRExDTEFTU0NPREVfRl9UTzogNTM1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX0ZST006IDUzNixcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9OT1RFUzogNTM3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX1RPOiA1MzgsXG4gICAgRlRfRExDTEFTU0NPREVfRkExX0ZST006IDUzOSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfTk9URVM6IDU0MCxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfVE86IDU0MSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9GUk9NOiA1NDIsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfTk9URVM6IDU0MyxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9UTzogNTQ0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX0ZST006IDU0NSxcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9OT1RFUzogNTQ2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX1RPOiA1NDcsXG4gICAgRlRfRExDTEFTU0NPREVfSF9GUk9NOiA1NDgsXG4gICAgRlRfRExDTEFTU0NPREVfSF9OT1RFUzogNTQ5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfVE86IDU1MCxcbiAgICBGVF9ETENMQVNTQ09ERV9JX0ZST006IDU1MSxcbiAgICBGVF9ETENMQVNTQ09ERV9JX05PVEVTOiA1NTIsXG4gICAgRlRfRExDTEFTU0NPREVfSV9UTzogNTUzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfRlJPTTogNTU0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfTk9URVM6IDU1NSxcbiAgICBGVF9ETENMQVNTQ09ERV9LX1RPOiA1NTYsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfRlJPTTogNTU3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX05PVEVTOiA1NTgsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfVE86IDU1OSxcbiAgICBGVF9ETENMQVNTQ09ERV9OX0ZST006IDU2MCxcbiAgICBGVF9ETENMQVNTQ09ERV9OX05PVEVTOiA1NjEsXG4gICAgRlRfRExDTEFTU0NPREVfTl9UTzogNTYyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfRlJPTTogNTYzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfTk9URVM6IDU2NCxcbiAgICBGVF9ETENMQVNTQ09ERV9TX1RPOiA1NjUsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfRlJPTTogNTY2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX05PVEVTOiA1NjcsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfVE86IDU2OCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9GUk9NOiA1NjksXG4gICAgRlRfRExDTEFTU0NPREVfVE1fTk9URVM6IDU3MCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9UTzogNTcxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX0ZST006IDU3MixcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9OT1RFUzogNTczLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX1RPOiA1NzQsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfRlJPTTogNTc1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX05PVEVTOiA1NzYsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfVE86IDU3NyxcbiAgICBGVF9ETENMQVNTQ09ERV9WX0ZST006IDU3OCxcbiAgICBGVF9ETENMQVNTQ09ERV9WX05PVEVTOiA1NzksXG4gICAgRlRfRExDTEFTU0NPREVfVl9UTzogNTgwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfRlJPTTogNTgxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfTk9URVM6IDU4MixcbiAgICBGVF9ETENMQVNTQ09ERV9XX1RPOiA1ODMsXG4gICAgRlRfVVJMOiA1ODQsXG4gICAgRlRfQ0FMSUJFUjogNTg1LFxuICAgIEZUX01PREVMOiA1ODYsXG4gICAgRlRfTUFLRTogNTg3LFxuICAgIEZUX05VTUJFUl9PRl9DWUxJTkRFUlM6IDU4OCxcbiAgICBGVF9TVVJOQU1FX09GX0hVU0JBTkRfQUZURVJfUkVHSVNUUkFUSU9OOiA1ODksXG4gICAgRlRfU1VSTkFNRV9PRl9XSUZFX0FGVEVSX1JFR0lTVFJBVElPTjogNTkwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfV0lGRTogNTkxLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfSFVTQkFORDogNTkyLFxuICAgIEZUX0NJVElaRU5TSElQX09GX0ZJUlNUX1BFUlNPTjogNTkzLFxuICAgIEZUX0NJVElaRU5TSElQX09GX1NFQ09ORF9QRVJTT046IDU5NCxcbiAgICBGVF9DVlY6IDU5NSxcbiAgICBGVF9EQVRFX09GX0lOU1VSQU5DRV9FWFBJUlk6IDU5NixcbiAgICBGVF9NT1JUR0FHRV9CWTogNTk3LFxuICAgIEZUX09MRF9ET0NVTUVOVF9OVU1CRVI6IDU5OCxcbiAgICBGVF9PTERfREFURV9PRl9JU1NVRTogNTk5LFxuICAgIEZUX09MRF9QTEFDRV9PRl9JU1NVRTogNjAwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX0ZST006IDYwMSxcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9UTzogNjAyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX05PVEVTOiA2MDMsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfRlJPTTogNjA0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX1RPOiA2MDUsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfTk9URVM6IDYwNixcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9GUk9NOiA2MDcsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfVE86IDYwOCxcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9OT1RFUzogNjA5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX0ZST006IDYxMCxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19UTzogNjExLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX05PVEVTOiA2MTIsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfRlJPTTogNjEzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX1RPOiA2MTQsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfTk9URVM6IDYxNSxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9GUk9NOiA2MTYsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfVE86IDYxNyxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9OT1RFUzogNjE4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfRlJPTTogNjE5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfVE86IDYyMCxcbiAgICBGVF9ETENMQVNTQ09ERV9SX05PVEVTOiA2MjEsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfRlJPTTogNjIyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX1RPOiA2MjMsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfTk9URVM6IDYyNCxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX0NMQVNTX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgY2xhc3MgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSVNTVUlOR19TVEFURV9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3Vpbmcgc3RhdGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9DVU1FTlRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9FWFBJUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfSVNTVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9CSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTEFDRV9PRl9CSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSU09OQUxfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9HSVZFTl9OQU1FUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaXZlbiBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT1RIRVJTX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OQVRJT05BTElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYXRpb25hbGl0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0VYOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNleFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSEVJR0hUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhlaWdodFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfV0VJR0hUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldlaWdodFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRVlFU19DT0xPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeWUgY29sb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0hBSVJfQ09MT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGFpciBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZGRyZXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET05PUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb25vclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTb2NpYWwgaW5zdXJhbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0VORE9SU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGVuZG9yc2VtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX1JFU1RSSUNUSU9OX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgUmVzdHJpY3Rpb24gQ29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfVU5ERVJfMjFfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIDIxc3QgYmlydGhkYXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FVVEhPUklUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIGF1dGhvcml0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05BVElPTkFMSVRZX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmF0aW9uYWxpdHkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEFTU1BPUlRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc3Nwb3J0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSU5WSVRBVElPTl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52aXRhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBJRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9DTEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIENsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1NVQl9DTEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIHN1YmNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NUlpfU1RSSU5HXzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTVJaX1NUUklOR18yOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9TVFJJTkdfMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZSAzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NUlpfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogVHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1BUSU9OQUxfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET0NVTUVOVF9DTEFTU19OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IGNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JU1NVSU5HX1NUQVRFX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBzdGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUExBQ0VfT0ZfSVNTVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0VYUElSWV9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GSU5BTF9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5hbCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBwYXNzcG9ydCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBpbnZpdGF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9JRF9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgdmlzYSBJRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciB2aXNhIGV4cGlyeSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PVEhFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTVJaX1NUUklOR1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OQU1FX1NVRkZJWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYW1lIHN1ZmZpeFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTkFNRV9QUkVGSVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmFtZSBwcmVmaXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGRhdGUgb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRhdGUgb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX1NFUklFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBzZXJpZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1JFR19OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVnaXN0cmF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfQ0FSX01PREVMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgbW9kZWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX0NBUl9DT0xPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGNvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9CT0RZX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCb2R5IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfQ0FSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9NQVhfV0VJR0hUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1heCBwZXJtaXNzaWJsZSB3ZWlnaHRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1dFSUdIVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmxhZGVuIG1hc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfQVJFQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmVhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX1NUQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX0JVSUxESU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfSE9VU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQnVpbGRpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfRkxBVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcGFydG1lbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BMQUNFX09GX1JFR0lTVFJBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiByZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfUkVHSVNUUkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRVNJREVOVF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW50IGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFU0lERU5UX1VOVElMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW50IHVudGlsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BVVRIT1JJVFlfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIGF1dGhvcml0eSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTEFDRV9PRl9CSVJUSF9BUkVBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyZWEgb2YgYmlydGhwbGFjZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUExBQ0VfT0ZfQklSVEhfU1RBVEVfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGF0ZSBjb2RlIG9mIGJpcnRocGxhY2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfU1RSRUVUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0cmVldFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19DSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVyaXNkaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfUE9TVEFMX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBkYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0VYUElSWV9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GSU5BTF9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5hbCBjaGVjayBkaWdpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBwYXNzcG9ydCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBpbnZpdGF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9JRF9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgdmlzYSBJRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciB2aXNhIGV4cGlyeSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVRfRExfQ0xBU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVRfREFURV9PRl9FWFBJUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGV4cGlyeSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVRfSURFTlRJRklFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgaWRlbnRpZmllclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSTUlUX0RBVEVfT0ZfSVNTVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGlzc3VlIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUk1JVF9SRVNUUklDVElPTl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCByZXN0cmljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVRfRU5ET1JTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGVuZG9yc2VtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lTU1VFX1RJTUVTVEFNUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1ZSB0aW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfRFVQTElDQVRFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgZHVwbGljYXRlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUVESUNBTF9JTkRJQ0FUT1JfQ09ERVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWVkaWNhbCBub3Rlcy9jb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTk9OX1JFU0lERU5UX0lORElDQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb24tcmVzaWRlbnQgaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1ZBTElEX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1ZBTElEX1VOVElMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgdmFsaWQgdW50aWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RVUkFUSU9OX09GX1NUQVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRHVyYXRpb24gb2Ygc3RheVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0VOVFJJRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PTlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vbnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ZRUFSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlllYXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1VOSVFVRV9DVVNUT01FUl9JREVOVElGSUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBjdXN0b21lciBpZGVudGlmaWVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT01NRVJDSUFMX1ZFSElDTEVfQ09ERVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tbWVyY2lhbCB2ZWhpY2xlIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9EQVRFX09GX0JJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQSBEYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BS0FfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgU29jaWFsIEluc3VyYW5jZSBOdW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQSBTdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BS0FfR0lWRU5fTkFNRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBIEdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9OQU1FX1NVRkZJWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgTmFtZSBzdWZmaXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9OQU1FX1BSRUZJWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgTmFtZSBwcmVmaXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BSUxJTkdfQUREUkVTU19TVFJFRVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFpbGluZyBhZGRyZXNzIC0gc3RyZWV0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQUlMSU5HX0FERFJFU1NfQ0lUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBjaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQUlMSU5HX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFpbGluZyBhZGRyZXNzIC0ganVyaXNkaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BSUxJTkdfQUREUkVTU19QT1NUQUxfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBwb3N0YWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQVVESVRfSU5GT1JNQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIGZvciB2YWxpZGF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JTlZFTlRPUllfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkludmVudG9yeSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JBQ0VfRVRITklDSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJhY2UvZXRobmljaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9KVVJJU0RJQ1RJT05fVkVISUNMRV9DTEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdXJpc2RpY3Rpb24gdmVoaWNsZSBjbGFzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSlVSSVNESUNUSU9OX0VORE9SU0VNRU5UX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVyaXNkaWN0aW9uIGVuZG9yc2VtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0pVUklTRElDVElPTl9SRVNUUklDVElPTl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiByZXN0cmljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQU1JTFlfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lL2dpdmVuIG5hbWUgYXQgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0dJVkVOX05BTUVTX1JVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaXZlbiBuYW1lIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfSURfUlVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgSUQgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSU19OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSU19OQU1FX1JVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIG5hbWUgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfUlVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BMQUNFX09GX0JJUlRIX1JVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aCAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BVVRIT1JJVFlfUlVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5IChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lTU1VJTkdfU1RBVEVfQ09ERV9OVU1FUklDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWVyaWMgaXNzdWluZyBzdGF0ZSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OQVRJT05BTElUWV9DT0RFX05VTUVSSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtZXJpYyBuYXRpb25hbGl0eSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FTkdJTkVfUE9XRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIHBvd2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FTkdJTkVfVk9MVU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSB2b2x1bWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NIQVNTSVNfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoYXNzaXMgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FTkdJTkVfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VOR0lORV9NT0RFTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdpbmUgbW9kZWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZFSElDTEVfQ0FURUdPUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBjYXRlZ29yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSWRlbnRpdHkgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTlRST0xfTk86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29udHJvbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBUlJFTlRTX0dJVkVOX05BTUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBhcmVudHNcXCcgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFQ09ORF9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlY29uZCBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NSURETEVfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWRkbGUgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfVklOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgaWRlbnRpZmljYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIFZJTlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfVklOX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBWSU5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfMV9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8zX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfMV9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8zX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHJlZ2lzdHJhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHJlZ2lzdHJhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1ZFSElDTEVfSVRTX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBJVFMgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0FSRF9BQ0NFU1NfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhcmQgYWNjZXNzIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFSSVRBTF9TVEFUVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFyaXRhbCBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTVBBTllfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wYW55IG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NQRUNJQUxfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BlY2lhbCBub3Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9PRl9TUE9TRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG91c2VcXCdzIHN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RSQUNLSU5HX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFja2luZyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JPT0tMRVRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJvb2tsZXQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DSElMRFJFTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGlsZHJlblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09QWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3B5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TRVJJQUxfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcmlhbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPU1NJRVJfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvc3NpZXIgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BS0FfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBIEZ1bGwgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVEVSUklUT1JJQUxfVkFMSURJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGVycml0b3JpYWwgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9TVFJJTkdTX1dJVEhfQ09SUkVDVF9DSEVDS19TVU1TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lcyB3aXRoIGNvcnJlY3QgY2hlY2tzdW1zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DRExfUkVTVFJJQ1RJT05fQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDREwgUmVzdHJpY3Rpb24gQ29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfVU5ERVJfMThfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIDE4dGggYmlydGhkYXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX1JFQ09SRF9DUkVBVEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlY29yZCBjcmVhdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9EVVBMSUNBVEVfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGR1cGxpY2F0ZSBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfSVNTX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2FyZCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NSUxJVEFSWV9CT09LX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWxpdGFyeSBJRCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RFU1RJTkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlc3RpbmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CTE9PRF9HUk9VUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCbG9vZCBncm91cFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0VRVUVOQ0VfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcXVlbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfQk9EWV9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJvZHkgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfQ0FSX01BUks6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBtYWtlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UUkFOU0FDVElPTl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJhbnNhY3Rpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWdlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GT0xJT19OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRm9saW8gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WT1RFUl9LRVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVm90ZXIgS2V5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX01VTklDSVBBTElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNdW5pY2lwYWxpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfTE9DQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTG9jYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFQ1RJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VjdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT0NSX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPQ1IgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GRURFUkFMX0VMRUNUSU9OUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGZWRlcmFsIGVsZWN0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVGRVJFTkNFX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PUFRJT05BTF9EQVRBX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBvcHRpb25hbCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PUFRJT05BTF9EQVRBX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBvcHRpb25hbCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIE51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHZpc2EgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgdmlzYSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZPVEVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZvdGVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QUkVWSU9VU19UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR5cGUvbnVtYmVyIG9mIHRoZSBwcmV2aW91cyBkb2N1bWVudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRklFTERfRlJPTV9NUlo6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmllbGQgZnJvbSBNUlpcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NVUlJFTlRfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDdXJyZW50IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NUQVRVU19EQVRFX09GX0VYUElSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGF0dXMgRXhwaXJ5IERhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JBTktOT1RFX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYW5rbm90ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NTQ19DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNTQyBDb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BUlRJU1RJQ19OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBzZXVkb255bVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUNBREVNSUNfVElUTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWNhZGVtaWMgdGl0bGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfQ09VTlRSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VudHJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX1pJUENPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiWklQIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8xOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUUkVFVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBCaXJ0aDogU3RyZWV0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgQmlydGg6IENpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgQmlydGg6IFN0YXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NPVU5UUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgQmlydGg6IENvdW50cnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VfSURfUExBQ0VfT0ZfQklSVEhfWklQQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBCaXJ0aDogUG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NETF9DTEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDREwgQ2xhc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX1VOREVSXzE5X0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiAxOXRoIGJpcnRoZGF5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9XRUlHSFRfUE9VTkRTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldlaWdodCAocG91bmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU1JVEVEX0RVUkFUSU9OX0RPQ1VNRU5UX0lORElDQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmRpY2F0b3Igb2YgZG9jdW1lbnQgbGltaXRlZCBkdXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRU5ET1JTRU1FTlRfRVhQSVJBVElPTl9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZG9yc2VtZW50IGV4cGlyYXRpb24gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVWSVNJT05fREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXZpc2lvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT01QTElBTkNFX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxpYW5jZSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQU1JTFlfTkFNRV9UUlVOQ0FUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRydW5jYXRlZCBzdXJuYW1lL2dpdmVuIG5hbWUgYXQgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZJUlNUX05BTUVfVFJVTkNBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaXJzdCBuYW1lIHRydW5jYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01JRERMRV9OQU1FX1RSVU5DQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlkZGxlIG5hbWUgdHJ1bmNhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRVhBTV9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkV4YW0gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1JHQU5JWkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9yZ2FuaXphdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREVQQVJUTUVOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEZXBhcnRtZW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVlfR1JBREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF5IGdyYWRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SQU5LOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJhbmtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JFTkVGSVRTX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCZW5lZml0cyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NQT05TT1JfU0VSVklDRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yIHNlcnZpY2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NQT05TT1JfU1RBVFVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3Igc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TUE9OU09SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFTEFUSU9OU0hJUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWxhdGlvbnNoaXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1VTQ0lTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVTQ0lTXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DQVRFR09SWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXRlZ29yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09ORElUSU9OUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb25kaXRpb25zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JREVOVElGSUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklkZW50aWZpZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTkZJR1VSQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRElTQ1JFVElPTkFSWV9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRpc2NyZXRpb25hcnkgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8xX09QVElPTkFMX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YSBmcm9tIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8yX09QVElPTkFMX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YSBmcm9tIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8zX09QVElPTkFMX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YSBmcm9tIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRVFWX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRVFWIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FMVF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFMVCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CSU5BUllfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW5hcnkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUFNFVURPX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHNldWRvY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkVFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZlZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1RBTVBfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YW1wIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfR05JQl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR05JQiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RFUFRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlcGFydG1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9URUxFWF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRlbGVncmFwaCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BTExFUkdJRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxsZXJnaWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TUF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwZWNpYWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09VUlRfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VydCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ291bnR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TUE9OU09SX1NTTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yIFNTTlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9fRF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9EIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUNfTk9WSUNFX0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhwaXJ5IGRhdGUgb2YgTW90b3JjeWNsZSBOb3ZpY2Ugc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EVUZfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRVRiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FHWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBR1lcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BOUl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBOUiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GUk9NX0FJUlBPUlRfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb2RlIG9mIHRoZSBhaXJwb3J0IG9mIGRlcGFydHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVE9fQUlSUE9SVF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvZGUgb2YgdGhlIGFpcnBvcnQgb2YgYXJyaXZhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkxJR0hUX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGbGlnaHQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0ZMSUdIVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGZsaWdodFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0VBVF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VhdCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfSVNTVUVfQk9BUkRJTkdfUEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJvYXJkaW5nIHBhc3MgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NDV19VTlRJTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDQ1cgdW50aWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFRkVSRU5DRV9OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIG51bWJlciBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgbnVtYmVyIGNoZWNrIGRpZ2l0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ST09NX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSb29tIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVMSUdJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVsaWdpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFTUFJTkRFUl9URVJNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vbnRocyB0byBleHBpcmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VMRUNUUk9OSUNfVElDS0VUX0lORElDQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbGVjdHJvbmljIHRpY2tldCBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTVBBUlRNRU5UX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGFydG1lbnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0hFQ0tfSU5fU0VRVUVOQ0VfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrLWluIHNlcXVlbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSTElORV9ERVNJR05BVE9SX09GX0JPQVJESU5HX1BBU1NfSVNTVUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgZGVzaWduYXRvciBvZiBib2FyZGluZyBwYXNzIGlzc3VlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSTElORV9OVU1FUklDX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBudW1lcmljIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RJQ0tFVF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGlja2V0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRlJFUVVFTlRfRkxZRVJfQUlSTElORV9ERVNJR05BVE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZXF1ZW50IGZseWVyIGFpcmxpbmUgZGVzaWduYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRlJFUVVFTlRfRkxZRVJfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZXF1ZW50IGZseWVyIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRlJFRV9CQUdHQUdFX0FMTE9XQU5DRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVlIGJhZ2dhZ2UgYWxsb3dhbmNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QREZfNDE3X0NPREVDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBERjQxNyBjb2RlY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGlkZW50aXR5IGNhcmQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JREVOVElUWV9DQVJEX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgaWRlbnRpdHkgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZFVEVSQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmV0ZXJhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BXzFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FfMV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BXzFfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DXzFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfMV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DXzFfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfMV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF8xX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfMV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQkVfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JFX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JFX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfMV9FX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzFFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ18xX0VfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzFFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfMV9FX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DRV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ0VfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0UgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ0VfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0UgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF8xX0VfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMUUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMUUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF8xX0VfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDFFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RFX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgREUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9ERV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBERSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9ERV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBERSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9NX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX01fVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9NX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE0gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfTF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEwgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9MX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEwgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfTF9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX1RfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfVF9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX1RfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BTV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEFNIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQU1fVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQU0gdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQU1fTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQU0gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV8yX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BXzJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV8yX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JfMV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQl8xX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIxIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JfMV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9BVF9CSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIGF0IGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DSVZJTF9TVEFUVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l2aWwgc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfU0VBVFM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIHNlYXRzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfU1RBTkRJTkdfUExBQ0VTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBzdGFuZGluZyBwbGFjZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BWF9TUEVFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggc3BlZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZVRUxfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGdWVsIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VDX0VOVklST05NRU5UQUxfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGVudmlyb25tZW50YWwgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUE9XRVJfV0VJR0hUX1JBVElPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvd2VyLXRvLXdlaWdodCByYXRpb1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9CUkFLRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF4IG1hc3Mgb2YgdHJhaWxlciAoYnJha2VkKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9VTkJSQUtFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggbWFzcyBvZiB0cmFpbGVyICh1bmJyYWtlZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RSQU5TTUlTU0lPTl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYW5zbWlzc2lvbiB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UUkFJTEVSX0hJVENIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYWlsZXIgaGl0Y2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FDQ09NUEFOSUVEX0JZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjY29tcGFuaWVkIGJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QT0xJQ0VfRElTVFJJQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9saWNlIGRpc3RyaWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GSVJTVF9JU1NVRV9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpcnN0IGlzc3VlIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBWUxPQURfQ0FQQUNJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF5bG9hZCBjYXBhY2l0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0FYRUxTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBheGxlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSTUlTU0lCTEVfQVhMRV9MT0FEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pc3NpYmxlIGF4bGUgbG9hZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUFJFQ0lOQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJlY2luY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lOVklURURfQlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52aXRlZCBieVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUFVSUE9TRV9PRl9FTlRSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQdXJwb3NlIG9mIGVudHJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TS0lOX0NPTE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNraW4gY29sb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTVBMRVhJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxleGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSUE9SVF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcnBvcnQgb2YgZGVwYXJ0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BSVJQT1JUX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcnBvcnQgb2YgYXJyaXZhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSTElORV9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSTElORV9OQU1FX0ZSRVFVRU5UX0ZMWUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgbG95YWx0eSBwcm9ncmFtIGZvciBmcmVxdWVudCBmbHllcnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJQ0VOU0VfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpY2Vuc2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JTl9UQU5LUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbiB0YW5rc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRVhFUFRfSU5fVEFOS1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhjZXB0IGluIHRhbmtzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQVNUX1RSQUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhc3QgVHJhY2sgc2VydmljZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1dORVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3duZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9TVFJJTkdTX0lDQU9fUkZJRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZXMgZnJvbSBJQ0FPIFJGSURcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIG51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIG51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0VOVFVSWV9EQVRFX09GX0JJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNlbnR1cnkgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9BM19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9BM19UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0EzX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQzJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQzJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9DMl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0IyX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0IyX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9EMl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9EMl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0QyX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJFX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9CMkVfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJFX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0dfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9HX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9HX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9KX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfSl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfSl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfTENfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfTENfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ19MQVNTQ09ERV9MQ19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMQyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQkFOS0NBUkROVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQkFOS0NBUkRWQUxJRFRIUlU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBjYXJkIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UQVhfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRheCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NCSF9TRUNVUklUWU9QVElPTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU0JIIHNlY3VyaXR5IG9wdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NCSF9JTlRFR1JJVFlPUFRJT05TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNCSCBpbnRlZ3JpdHkgb3B0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9DUkVBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDcmVhdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WQUxJRElUWV9QRVJJT0Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmFsaWRpdHkgcGVyaW9kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVRST05fSEVBREVSX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF0cm9uIGhlYWRlciB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CREJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCREIgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQklPTUVUUklDX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JJT01FVFJJQ19TVUJUWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBzdWJ0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CSU9NRVRSSUNfUFJPRFVDVElEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBwcm9kdWN0IElEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CSU9NRVRSSUNfRk9STUFUX09XTkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBmb3JtYXQgb3duZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JJT01FVFJJQ19GT1JNQVRfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyaWMgZm9ybWF0IHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BIT05FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBob25lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QUk9GRVNTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2Zlc3Npb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RJVExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvc2l0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05BTF9TVU1NQVJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsIGRhdGEgc3VtbWFyeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1RIRVJfVkFMSURfSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgdmFsaWQgSURzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DVVNUT0RZX0lORk86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3VzdG9keSBpbmZvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PVEhFUl9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09CU0VSVkFUSU9OUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPYnNlcnZhdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RBWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfUEVSU09OQUxJWkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsaXphdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05BTElaQVRJT05fU046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyaWFsIG51bWJlciBvZiBwZXJzb25hbGl6YXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09USEVSUEVSU09OX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgcGVyc29uLCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05UT05PVElGWV9EQVRFX09GX1JFQ09SRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBEYXRlIG9mIHJlY29yZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSU09OVE9OT1RJRllfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBOYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05UT05PVElGWV9QSE9ORTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBQaG9uZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSU09OVE9OT1RJRllfQUREUkVTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBBZGRyZXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EU19DRVJUSUZJQ0FURV9JU1NVRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFMgY2VydGlmaWNhdGUgaXNzdWVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EU19DRVJUSUZJQ0FURV9TVUJKRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHN1YmplY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RTX0NFUlRJRklDQVRFX1ZBTElERlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEUyBjZXJ0aWZpY2F0ZSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EU19DRVJUSUZJQ0FURV9WQUxJRFRPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WUkNfREFUQU9CSkVDVF9FTlRSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGRhdGEgZnJvbSB0aGUgREcxIGRhdGEgZ3JvdXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0dSQU5ERkFUSEVSTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHcmFuZGZhdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSEVBTFRIX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWFsdGggaW5zdXJhbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVFlQRV9BUFBST1ZBTF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHlwZSBvZiBhcHByb3ZhbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FETUlOSVNUUkFUSVZFX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZG1pbmlzdHJhdGl2ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX0RJU0NSSU1JTkFUT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgZGlzY3JpbWluYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFUQV9ESVNDUklNSU5BVE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGEgZGlzY3JpbWluYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSVNPX0lTU1VFUl9JRF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSUQgbnVtYmVyIG9mIElTTyBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFTEVDVEVFX0lORElDQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWxlY3RlZSBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUl9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3Mgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9USEVSX0dJVkVOTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIGdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUl9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3Mgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX0dJVkVOTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUl9EQVRFT0ZCSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUl9EQVRFT0ZCSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUl9QRVJTT05BTE5VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIHBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX1BFUlNPTkFMTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT1RIRVJfUExBQ0VPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgcGxhY2Ugb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUl9QTEFDRU9GQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBwbGFjZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9USEVSX0NPVU5UUllPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgY291bnRyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX0NPVU5UUllPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgY291bnRyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9GSVJTVF9SRU5FV0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZmlyc3QgcmVuZXdhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9TRUNPTkRfUkVORVdBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIHNlY29uZCByZW5ld2FsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTEFDRV9PRl9FWEFNSU5BVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBleGFtaW5hdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQVBQTElDQVRJT05fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFwcGxpY2F0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVk9VQ0hFUl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVm91Y2hlciBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FVVEhPUklaQVRJT05fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkF1dGhvcml6YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQUNVTFRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhY3VsdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZPUk1fT0ZfRURVQ0FUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZvcm0gb2YgZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETklfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkROSSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFVElSRU1FTlRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJldGlyZW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QUk9GRVNTSU9OQUxfSURfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2Zlc3Npb25hbCBJRCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FHRV9BVF9JU1NVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZ2UgYXQgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1lFQVJTX1NJTkNFX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlllYXJzIHNpbmNlIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9CVFBfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCVFAgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQlRQX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJUUCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQlRQX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJUUCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQzNfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9DM19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQzNfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0VfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0VfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRkFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRkFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZBMV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQTFfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQTFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZCX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRzFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9HMV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRzFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRzEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSF9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9JX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9JX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEkgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0lfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfS19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfS19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBLIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9LX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0xLX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTEtfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0xLX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExLIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9OX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9OX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE4gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX05fVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfU19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfU19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBTIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9TX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RCX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVEJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RCX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRCIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UTV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RNX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UTV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UUl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RWX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFZfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RWX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRWIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9WX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9WX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1ZfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfV19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfV19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBXIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9XX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NBTElCRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2FsaWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0lUSVpFTlNISVBfT0ZfRklSU1RfUEVSU09OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdGl6ZW5zaGlwIG9mIHRoZSBmaXJzdCBwZXJzb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NJVElaRU5TSElQX09GX1NFQ09ORF9QRVJTT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0aXplbnNoaXAgb2YgdGhlIHNlY29uZCBwZXJzb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NWVjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDVlYvQ1ZDXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIX09GX0hVU0JBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aCBvZiBodXNiYW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIX09GX1dJRkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aCBvZiB3aWZlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQUtFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1ha2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PREVMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vZGVsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfQ1lMSU5ERVJTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBjeWxpbmRlcnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NVUk5BTUVfT0ZfSFVTQkFORF9BRlRFUl9SRUdJU1RSQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBvZiBodXNiYW5kIGFmdGVyIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9PRl9XSUZFX0FGVEVSX1JFR0lTVFJBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIG9mIHdpZmUgYWZ0ZXIgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9VUkw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVJMXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0lOU1VSQU5DRV9FWFBJUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhwaXJ5IGRhdGUgb2YgaW5zdXJhbmNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT1JUR0FHRV9CWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3J0Z2FnZSBieVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT0xEX0RPQ1VNRU5UX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgZG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PTERfREFURV9PRl9JU1NVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgZGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT0xEX1BMQUNFX09GX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9sZCBwbGFjZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTFJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9MUl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTFJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01SX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTVIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTVJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTVIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01SX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1SIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IUl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hSX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IUl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSENfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IQ19UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSENfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSEMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01DX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTUMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTUNfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTUMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01DX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1DIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SRV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1JFX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SRV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfUl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfUl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0NBX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0EgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQ0FfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0EgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0NBX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENBIGNvZGVzXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvbnRTdHlsZSA9IHtcbiAgICBOT1JNQUw6IDAsXG4gICAgQk9MRDogMSxcbiAgICBJVEFMSUM6IDIsXG4gICAgQk9MRF9JVEFMSUM6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBGcmFtZVNoYXBlVHlwZSA9IHtcbiAgICBMSU5FOiAwLFxuICAgIENPUk5FUjogMSxcbn1cblxuZXhwb3J0IGNvbnN0IExDSUQgPSB7XG4gICAgTEFUSU46IDAsXG4gICAgQUZSSUtBQU5TOiAxMDc4LFxuICAgIEFMQkFOSUFOOiAxMDUyLFxuICAgIEFSQUJJQ19BTEdFUklBOiA1MTIxLFxuICAgIEFSQUJJQ19CQUhSQUlOOiAxNTM2MSxcbiAgICBBUkFCSUNfRUdZUFQ6IDMwNzMsXG4gICAgQVJBQklDX0lSQVE6IDIwNDksXG4gICAgQVJBQklDX0pPUkRBTjogMTEyNjUsXG4gICAgQVJBQklDX0tVV0FJVDogMTMzMTMsXG4gICAgQVJBQklDX0xFQkFOT046IDEyMjg5LFxuICAgIEFSQUJJQ19MSUJZQTogNDA5NyxcbiAgICBBUkFCSUNfTU9ST0NDTzogNjE0NSxcbiAgICBBUkFCSUNfT01BTjogODE5MyxcbiAgICBBUkFCSUNfUUFUQVI6IDE2Mzg1LFxuICAgIEFSQUJJQ19TQVVESV9BUkFCSUE6IDEwMjUsXG4gICAgQVJBQklDX1NZUklBOiAxMDI0MSxcbiAgICBBUkFCSUNfVFVOSVNJQTogNzE2OSxcbiAgICBBUkFCSUNfVUFFOiAxNDMzNyxcbiAgICBBUkFCSUNfWUVNRU46IDkyMTcsXG4gICAgQVJBQklDX0FSTUVOSUFOOiAxMDY3LFxuICAgIEFaRVJJX0NZUklMSUM6IDIwOTIsXG4gICAgQVpFUklfTEFUSU46IDEwNjgsXG4gICAgQkFTUVVFOiAxMDY5LFxuICAgIEJFTEFSVVNJQU46IDEwNTksXG4gICAgQlVMR0FSSUFOOiAxMDI2LFxuICAgIENBVEFMQU46IDEwMjcsXG4gICAgQ0hJTkVTRV9IT05HS09OR19TQVI6IDMwNzYsXG4gICAgQ0hJTkVTRV9NQUNBT19TQVI6IDUxMjQsXG4gICAgQ0hJTkVTRTogMjA1MixcbiAgICBDSElORVNFX1NJTkdBUE9SRTogNDEwMCxcbiAgICBDSElORVNFX1RBSVdBTjogMTAyOCxcbiAgICBDUk9BVElBTjogMTA1MCxcbiAgICBDWkVDSDogMTAyOSxcbiAgICBEQU5JU0g6IDEwMzAsXG4gICAgRElWRUhJOiAxMTI1LFxuICAgIERVVENIX0JFTEdJVU06IDIwNjcsXG4gICAgRFVUQ0hfTkVUSEVSTEFORFM6IDEwNDMsXG4gICAgRU5HTElTSF9BVVNUUkFMSUE6IDMwODEsXG4gICAgRU5HTElTSF9CRUxJWkU6IDEwMjQ5LFxuICAgIEVOR0xJU0hfQ0FOQURBOiA0MTA1LFxuICAgIEVOR0xJU0hfQ0FSUklCRUFOOiA5MjI1LFxuICAgIEVOR0xJU0hfSVJFTEFORDogNjE1MyxcbiAgICBFTkdMSVNIX0pBTUFJQ0E6IDgyMDEsXG4gICAgRU5HTElTSF9ORVdfWkVBTEFORDogNTEyOSxcbiAgICBFTkdMSVNIX1BISUxJUFBJTkVTOiAxMzMyMSxcbiAgICBFTkdMSVNIX1NPVVRIX0FGUklDQTogNzE3NyxcbiAgICBFTkdMSVNIX1RSSU5JREFEOiAxMTI3MyxcbiAgICBFTkdMSVNIX1VLOiAyMDU3LFxuICAgIEVOR0xJU0hfVVM6IDEwMzMsXG4gICAgRU5HTElTSF9aSU1CQUJXRTogMTIyOTcsXG4gICAgRVNUT05JQU46IDEwNjEsXG4gICAgRkFFUk9FU0U6IDEwODAsXG4gICAgRkFSU0k6IDEwNjUsXG4gICAgRklOTklTSDogMTAzNSxcbiAgICBGUkVOQ0hfQkVMR0lVTTogMjA2MCxcbiAgICBGUkVOQ0hfQ0FOQURBOiAzMDg0LFxuICAgIEZSRU5DSF9GUkFOQ0U6IDEwMzYsXG4gICAgRlJFTkNIX0xVWEVNQk9VUkc6IDUxMzIsXG4gICAgRlJFTkNIX01PTkFDTzogNjE1NixcbiAgICBGUkVOQ0hfU1dJVFpFUkxBTkQ6IDQxMDgsXG4gICAgRllST19NQUNFRE9OSUFOOiAxMDcxLFxuICAgIEdBTElDSUFOOiAxMTEwLFxuICAgIEdFT1JHSUFOOiAxMDc5LFxuICAgIEdFUk1BTl9BVVNUUklBOiAzMDc5LFxuICAgIEdFUk1BTl9HRVJNQU5ZOiAxMDMxLFxuICAgIEdFUk1BTl9MSUVDSFRFTlNURUlOOiA1MTI3LFxuICAgIEdFUk1BTl9MVVhFTUJPVVJHOiA0MTAzLFxuICAgIEdFUk1BTl9TV0lUWkVSTEFORDogMjA1NSxcbiAgICBHUkVFSzogMTAzMixcbiAgICBHVUpBUkFUSTogMTA5NSxcbiAgICBIRUJSRVc6IDEwMzcsXG4gICAgSElORElfSU5ESUE6IDEwODEsXG4gICAgSFVOR0FSSUFOOiAxMDM4LFxuICAgIElDRUxBTkRJQzogMTAzOSxcbiAgICBJTkRPTkVTSUFOOiAxMDU3LFxuICAgIElUQUxJQU5fSVRBTFk6IDEwNDAsXG4gICAgSVRBTElBTl9TV0lUWkVSTEFORDogMjA2NCxcbiAgICBKQVBBTkVTRTogMTA0MSxcbiAgICBLQU5OQURBOiAxMDk5LFxuICAgIEtBWkFLSDogMTA4NyxcbiAgICBLT05LQU5JOiAxMTExLFxuICAgIEtPUkVBTjogMTA0MixcbiAgICBLWVJHWVpfQ1lSSUxJQ0s6IDEwODgsXG4gICAgTEFUVklBTjogMTA2MixcbiAgICBMSVRIVUFOSUFOOiAxMDYzLFxuICAgIE1BTEFZX01BTEFZU0lBOiAxMDg2LFxuICAgIE1BTEFZX0JSVU5FSV9EQVJVU1NBTEFNOiAyMTEwLFxuICAgIE1BUkFUSEk6IDExMDIsXG4gICAgTU9OR09MSUFOX0NZUklMSUM6IDExMDQsXG4gICAgTk9SV0VHSUFOX0JPS01BTDogMTA0NCxcbiAgICBOT1JXRUdJQU5fTllPUlNLOiAyMDY4LFxuICAgIFBPTElTSDogMTA0NSxcbiAgICBQT1JUVUdVRVNFX0JSQVpJTDogMTA0NixcbiAgICBQT1JUVUdVRVNFX1BPUlRVR0FMOiAyMDcwLFxuICAgIFBVTkpBQkk6IDEwOTQsXG4gICAgUkhBRVRPX1JPTUFOSUM6IDEwNDcsXG4gICAgUk9NQU5JQU46IDEwNDgsXG4gICAgUlVTU0lBTjogMTA0OSxcbiAgICBTQU5TS1JJVDogMTEwMyxcbiAgICBTRVJCSUFOX0NZUklMSUM6IDMwOTgsXG4gICAgU0VSQklBTl9MQVRJTjogMjA3NCxcbiAgICBTTE9WQUs6IDEwNTEsXG4gICAgU0xPVkVOSUFOOiAxMDYwLFxuICAgIFNQQU5JU0hfQVJHRU5USU5BOiAxMTI3NCxcbiAgICBTUEFOSVNIX0JPTElWSUE6IDE2Mzk0LFxuICAgIFNQQU5JU0hfQ0hJTEU6IDEzMzIyLFxuICAgIFNQQU5JQ0hfQ09MT01CSUE6IDkyMjYsXG4gICAgU1BBTklTSF9DT1NUQV9SSUNBOiA1MTMwLFxuICAgIFNQQU5JU0hfRE9NSU5JQ0FOX1JFUFVCTElDOiA3MTc4LFxuICAgIFNQQU5JU0hfRUNVQURPUjogMTIyOTgsXG4gICAgU1BBTklTSF9FTF9TQUxWQURPUjogMTc0MTgsXG4gICAgU1BBTklTSF9HVUFURU1BTEE6IDQxMDYsXG4gICAgU1BBTklTSF9IT05EVVJBUzogMTg0NDIsXG4gICAgU1BBTklTSF9NRVhJQ086IDIwNTgsXG4gICAgU1BBTklTSF9OSUNBUkFHVUE6IDE5NDY2LFxuICAgIFNQQU5JU0hfUEFOQU1BOiA2MTU0LFxuICAgIFNQQU5JU0hfUEFSQUdVQVk6IDE1MzcwLFxuICAgIFNQQU5JU0hfUEVSVTogMTAyNTAsXG4gICAgU1BBTklTSF9QVUVSVE9fUklDTzogMjA0OTAsXG4gICAgU1BBTklTSF9UUkFESVRJT05BTF9TT1JUOiAxMDM0LFxuICAgIFNQQU5JU0hfSU5URVJOQVRJT05BTF9TT1JUOiAzMDgyLFxuICAgIFNQQU5JU0hfVVJVR1VBWTogMTQzNDYsXG4gICAgU1BBTklTSF9WRU5FWlVFTEE6IDgyMDIsXG4gICAgU1dBSElMSTogMTA4OSxcbiAgICBTV0VESVNIOiAxMDUzLFxuICAgIFNXRURJU0hfRklOTEFORDogMjA3NyxcbiAgICBTWVJJQUM6IDExMTQsXG4gICAgVEFNSUw6IDEwOTcsXG4gICAgVEFUQVI6IDEwOTIsXG4gICAgVEVMVUdVOiAxMDk4LFxuICAgIFRIQUlfVEhBSUxBTkQ6IDEwNTQsXG4gICAgVFVSS0lTSDogMTA1NSxcbiAgICBUQUpJS19DWVJJTExJQzogMTA2NCxcbiAgICBUVVJLTUVOOiAxMDkwLFxuICAgIFVLUkFJTklBTjogMTA1OCxcbiAgICBVUkRVOiAxMDU2LFxuICAgIFVaQkVLX0NZUklMSUM6IDIxMTUsXG4gICAgVVpCRUtfTEFUSU46IDEwOTEsXG4gICAgVklFVE5BTUVTRTogMTA2NixcbiAgICBDVENfU0lNUExJRklFRDogNTAwMDEsXG4gICAgQ1RDX1RSQURJVElPTkFMOiA1MDAwMixcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLkxBVElOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxhdGluXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BRlJJS0FBTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWZyaWthYW5zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BTEJBTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBbGJhbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0FMR0VSSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChBbGdlcmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0JBSFJBSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChCYWhyYWluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0VHWVBUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoRWd5cHQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfSVJBUTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKElyYXEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfSk9SREFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoSm9yZGFuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0tVV0FJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEt1d2FpdClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19MRUJBTk9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoTGViYW5vbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19MSUJZQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKExpYnlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX01PUk9DQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChNb3JvY2NvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX09NQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChPbWFuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1FBVEFSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoUWF0YXIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfU0FVRElfQVJBQklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoU2F1ZGkgQXJhYmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1NZUklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoU3lyaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfVFVOSVNJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFR1bmlzaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfVUFFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoVS5BLkUuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1lFTUVOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoWWVtZW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfQVJNRU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJtZW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFaRVJJX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXplcmkgKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVpFUklfTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXplcmkgKExhdGluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQkFTUVVFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhc3F1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQkVMQVJVU0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCZWxhcnVzaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CVUxHQVJJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQnVsZ2FyaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DQVRBTEFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhdGFsYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfSE9OR0tPTkdfU0FSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKEhvbmdLb25nIFMuQS5SLilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfTUFDQU9fU0FSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKE1hY2FvIFMuQS5SLilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRV9TSU5HQVBPUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZSAoU2luZ2Fwb3JlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRV9UQUlXQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZSAoVGFpd2FuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ1JPQVRJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3JvYXRpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNaRUNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkN6ZWNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5EQU5JU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGFuaXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ESVZFSEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGl2ZWhpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5EVVRDSF9CRUxHSVVNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkR1dGNoIChCZWxnaXVtKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRFVUQ0hfTkVUSEVSTEFORFM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRHV0Y2ggKE5ldGhlcmxhbmRzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9BVVNUUkFMSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQXVzdHJhbGlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9CRUxJWkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQmVsaXplKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9DQU5BREE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQ2FuYWRhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9DQVJSSUJFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQ2FyaWJiZWFuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9JUkVMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKElyZWxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0pBTUFJQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoSmFtYWljYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfTkVXX1pFQUxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoTmV3IFplYWxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1BISUxJUFBJTkVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFBoaWxpcHBpbmVzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9TT1VUSF9BRlJJQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoU291dGggQWZyaWNhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9UUklOSURBRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChUcmluaWRhZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfVUs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoVW5pdGVkIEtpbmdkb20pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1VTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFVuaXRlZCBTdGF0ZXMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1pJTUJBQldFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFppbWJhYndlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVNUT05JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXN0b25pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZBRVJPRVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhZXJvZXNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GQVJTSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXJzaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRklOTklTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5uaXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfQkVMR0lVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKEJlbGdpdW0pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfQ0FOQURBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoQ2FuYWRhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0ZSQU5DRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKEZyYW5jZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9MVVhFTUJPVVJHOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoTHV4ZW1ib3VyZylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9NT05BQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChNb25hY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfU1dJVFpFUkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChTd2l0emVybGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdBTElDSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdhbGljaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRU9SR0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZW9yZ2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0FVU1RSSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChBdXN0cmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0dFUk1BTlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChHZXJtYW55KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0xJRUNIVEVOU1RFSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChMaWVjaHRlbnN0ZWluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0xVWEVNQk9VUkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChMdXhlbWJvdXJnKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX1NXSVRaRVJMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoU3dpdHplcmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HUkVFSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHcmVla1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR1VKQVJBVEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR3VqYXJhdGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkhFQlJFVzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWJyZXdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkhJTkRJX0lORElBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhpbmRpIChJbmRpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkhVTkdBUklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIdW5nYXJpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklDRUxBTkRJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJY2VsYW5kaWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklORE9ORVNJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5kb25lc2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSVRBTElBTl9JVEFMWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJdGFsaWFuIChJdGFseSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklUQUxJQU5fU1dJVFpFUkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXRhbGlhbiAoU3dpdHplcmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5KQVBBTkVTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKYXBhbmVzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS0FOTkFEQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLYW5uYWRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LQVpBS0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS2F6YWtoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LT05LQU5JOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIktvbmthbmlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktPUkVBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLb3JlYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktZUkdZWl9DWVJJTElDSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLeXJneXogKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTEFUVklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMYXR2aWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5MSVRIVUFOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpdGh1YW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZZUk9fTUFDRURPTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGWVJPIE1hY2Vkb25pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk1BTEFZX01BTEFZU0lBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hbGF5IChNYWxheXNpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk1BTEFZX0JSVU5FSV9EQVJVU1NBTEFNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hbGF5IChCcnVuZWkgRGFydXNzYWxhbSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk1BUkFUSEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFyYXRoaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTU9OR09MSUFOX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9uZ29saWFuIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5PUldFR0lBTl9CT0tNQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm9yd2VnaWFuIChCb2ttYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OT1JXRUdJQU5fTllPUlNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vcndlZ2lhbiAoTnlub3JzaylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlBPTElTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb2xpc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlBPUlRVR1VFU0VfQlJBWklMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnR1Z3Vlc2UgKEJyYXppbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlBPUlRVR1VFU0VfUE9SVFVHQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHVndWVzZSAoUG9ydHVnYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QVU5KQUJJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlB1bmphYmlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJIQUVUT19ST01BTklDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJoYWV0by1Sb21hbmljXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ST01BTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSb21hbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUlVTU0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSdXNzaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TQU5TS1JJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTYW5za3JpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0VSQklBTl9DWVJJTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcmJpYW4gKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0VSQklBTl9MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXJiaWFuIChMYXRpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNMT1ZBSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTbG92YWtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNMT1ZFTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTbG92ZW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQVJHRU5USU5BOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEFyZ2VudGluYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQk9MSVZJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChCb2xpdmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9DSElMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChDaGlsZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JQ0hfQ09MT01CSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQ29sb21iaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0NPU1RBX1JJQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQ29zdGEgUmljYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfRE9NSU5JQ0FOX1JFUFVCTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKERvbWluaWNhbiBSZXB1YmxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfRUNVQURPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChFY3VhZG9yKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9FTF9TQUxWQURPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChFbCBTYWx2YWRvcilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfR1VBVEVNQUxBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEd1YXRlbWFsYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfSE9ORFVSQVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoSG9uZHVyYXMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX01FWElDTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChNZXhpY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX05JQ0FSQUdVQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChOaWNhcmFndWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BBTkFNQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChQYW5hbWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BBUkFHVUFZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFBhcmFndWF5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9QRVJVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFBlcnUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BVRVJUT19SSUNPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFB1ZXJ0byBSaWNvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9UUkFESVRJT05BTF9TT1JUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFRyYWRpdGlvbmFsIFNvcnQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0lOVEVSTkFUSU9OQUxfU09SVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChJbnRlcm5hdGlvbmFsIFNvcnQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1VSVUdVQVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoVXJ1Z3VheSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfVkVORVpVRUxBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFZlbmV6dWVsYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNXQUhJTEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3dhaGlsaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1dFRElTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTd2VkaXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TV0VESVNIX0ZJTkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3dlZGlzaCAoRmlubGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNZUklBQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTeXJpYWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRBTUlMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRhbWlsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UQVRBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYXRhclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEVMVUdVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRlbHVndVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEhBSV9USEFJTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGFpIChUaGFpbGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRVUktJU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHVya2lzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEFKSUtfQ1lSSUxMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGFqaWsgKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVFVSS01FTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUdXJrbWVuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VS1JBSU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVWtyYWluaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VUkRVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVyZHVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVaQkVLX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVXpiZWsgKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVVpCRUtfTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVXpiZWsgKExhdGluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVklFVE5BTUVTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaWV0bmFtZXNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DVENfU0lNUExJRklFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDVEMgU2ltcGxpZmllZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ1RDX1RSQURJVElPTkFMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNUQyBUcmFkaXRpb25hbFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBQS0RSZXNvdXJjZVR5cGUgPSB7XG4gICAgQ0VSVElGSUNBVEVfUEE6IDAsXG4gICAgQ0VSVElGSUNBVEVfVEE6IDEsXG4gICAgTERJRjogMixcbiAgICBDUkw6IDMsXG4gICAgTUw6IDQsXG4gICAgREVGTDogNSxcbiAgICBERVZMOiA2LFxuICAgIEJMOiA3LFxuXHJcbiAgICBnZXRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwYVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfUEFcclxuICAgICAgICAgICAgY2FzZSBcInRhXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9UQVxyXG4gICAgICAgICAgICBjYXNlIFwibGRpZlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTERJRlxyXG4gICAgICAgICAgICBjYXNlIFwiY3JsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DUkxcclxuICAgICAgICAgICAgY2FzZSBcIm1sXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NTFxyXG4gICAgICAgICAgICBjYXNlIFwiZGVmbFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuREVGTFxyXG4gICAgICAgICAgICBjYXNlIFwiZGV2bFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuREVWTFxyXG4gICAgICAgICAgICBjYXNlIFwiYmxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJMXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9QQVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5leHBvcnQgY29uc3QgUHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzID0ge1xuICAgIE5PVF9SRUFEWTogMCxcbiAgICBSRUFEWTogMSxcbiAgICBUSU1FT1VUOiAyLFxufVxuXG5leHBvcnQgY29uc3QgUkdMTWVhc3VyZVN5c3RlbSA9IHtcbiAgICBNRVRSSUM6IDAsXG4gICAgSU1QRVJJQUw6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBTY2VuYXJpb0lkZW50aWZpZXIgPSB7XG4gICAgU0NFTkFSSU9fTVJaOiBcIk1yelwiLFxuICAgIFNDRU5BUklPX0JBUkNPREU6IFwiQmFyY29kZVwiLFxuICAgIFNDRU5BUklPX0xPQ0FURTogXCJMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19PQ1I6IFwiT2NyXCIsXG4gICAgU0NFTkFSSU9fRE9DVFlQRTogXCJEb2NUeXBlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0JBUkNPREU6IFwiTXJ6T3JCYXJjb2RlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0xPQ0FURTogXCJNcnpPckxvY2F0ZVwiLFxuICAgIFNDRU5BUklPX01SWl9BTkRfTE9DQVRFOiBcIk1yekFuZExvY2F0ZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9PQ1I6IFwiTXJ6T3JPY3JcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfQkFSQ09ERV9PUl9PQ1I6IFwiTXJ6T3JCYXJjb2RlT3JPY3JcIixcbiAgICBTQ0VOQVJJT19MT0NBVEVfVklTVUFMX0FORF9NUlpfT1JfT0NSOiBcIkxvY2F0ZVZpc3VhbF9BbmRfTXJ6T3JPY3JcIixcbiAgICBTQ0VOQVJJT19GVUxMX1BST0NFU1M6IFwiRnVsbFByb2Nlc3NcIixcbiAgICBTQ0VOQVJJT19GVUxMX0FVVEg6IFwiRnVsbEF1dGhcIixcbiAgICBTQ0VOQVJJT19JRDNSVVM6IFwiSWQzUnVzXCIsXG4gICAgU0NFTkFSSU9fUlVTX1NUQU1QOiBcIlJ1c1N0YW1wXCIsXG4gICAgU0NFTkFSSU9fT0NSX0ZSRUU6IFwiT2NyRnJlZVwiLFxuICAgIFNDRU5BUklPX0NSRURJVF9DQVJEOiBcIkNyZWRpdENhcmRcIixcbiAgICBTQ0VOQVJJT19DQVBUVVJFOiBcIkNhcHR1cmVcIixcbn1cblxuZXhwb3J0IGNvbnN0IExpbmVDYXAgPSB7XG4gICAgQnV0dDogMCxcbiAgICBSb3VuZDogMSxcbiAgICBTcXVhcmU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBVSUludGVyZmFjZU9yaWVudGF0aW9uTWFzayA9IHtcbiAgICBQb3J0cmFpdDogMCxcbiAgICBMYW5kc2NhcGVMZWZ0OiAxLFxuICAgIExhbmRzY2FwZVJpZ2h0OiAyLFxuICAgIFBvcnRyYWl0VXBzaWRlRG93bjogMyxcbiAgICBMYW5kc2NhcGU6IDQsXG4gICAgQWxsOiA1LFxuICAgIEFsbEJ1dFVwc2lkZURvd246IDYsXG59XG5cbmV4cG9ydCBjb25zdCBBVkNhcHR1cmVTZXNzaW9uUHJlc2V0ID0ge1xuICAgIExvdzogMCxcbiAgICBNZWRpdW06IDEsXG4gICAgSGlnaDogMixcbiAgICBQaG90bzogMyxcbiAgICBJbnB1dFByaW9yaXR5OiA0LFxuICAgIFFIRDk2MHg1NDA6IDUsXG4gICAgSGQxMjgweDcyMDogNixcbiAgICBIZDE5MjB4MTA4MDogNyxcbiAgICBIZDRLMzg0MHgyMTYwOiA4LFxuICAgIElGcmFtZTk2MHg1NDA6IDksXG4gICAgSUZyYW1lMTI4MHg3MjA6IDEwLFxuICAgIFF2Z2EzMjB4MjQwOiAxMSxcbiAgICBWZ2E2NDB4NDgwOiAxMixcbiAgICBDaWYzNTJ4Mjg4OiAxMyxcbn1cblxuZXhwb3J0IGNvbnN0IEFWQ2FwdHVyZURldmljZVBvc2l0aW9uID0ge1xuICAgIEZyb250OiAwLFxuICAgIEJhY2s6IDEsXG4gICAgVW5zcGVjaWZpZWQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBVSVZpZXdDb250ZW50TW9kZSA9IHtcbiAgICBTY2FsZVRvRmlsbDogMCxcbiAgICBTY2FsZUFzcGVjdEZpdDogMSxcbiAgICBTY2FsZUFzcGVjdEZpbGw6IDIsXG4gICAgUmVkcmF3OiAzLFxuICAgIENlbnRlcjogNCxcbiAgICBUb3A6IDUsXG4gICAgQm90dG9tOiA2LFxuICAgIExlZnQ6IDcsXG4gICAgUmlnaHQ6IDgsXG4gICAgVG9wTGVmdDogOSxcbiAgICBUb3BSaWdodDogMTAsXG4gICAgQm90dG9tTGVmdDogMTEsXG4gICAgQm90dG9tUmlnaHQ6IDEyLFxufVxuXG5leHBvcnQgY29uc3QgRW51bSA9IHtcbiAgIEJhcmNvZGVSZXN1bHQsXG4gICBCYXJjb2RlVHlwZSxcbiAgIENhbWVyYU1vZGUsXG4gICBDYW1lcmFUeXBlcyxcbiAgIENhcHR1cmVNb2RlLFxuICAgZGlEb2NUeXBlLFxuICAgRG9jRm9ybWF0LFxuICAgRG9jUmVhZGVyQWN0aW9uLFxuICAgRG9jUmVhZGVyRnJhbWUsXG4gICBEb2NSZWFkZXJPcmllbnRhdGlvbixcbiAgIGVDaGVja0RpYWdub3NlLFxuICAgZUNoZWNrUmVzdWx0LFxuICAgZUdyYXBoaWNGaWVsZFR5cGUsXG4gICBlSW1hZ2VRdWFsaXR5Q2hlY2tUeXBlLFxuICAgZVByb2Nlc3NHTENvbW1hbmRzLFxuICAgZVJlcXVlc3RDb21tYW5kLFxuICAgZVJGSURfQWNjZXNzQ29udHJvbF9Qcm9jZWR1cmVUeXBlLFxuICAgZVJGSURfQXV0aGVudGljYXRpb25Qcm9jZWR1cmVUeXBlLFxuICAgZVJGSURfQmF1ZFJhdGUsXG4gICBlUkZJRF9DZXJ0aWZpY2F0ZVR5cGUsXG4gICBlUkZJRF9EYXRhRmlsZV9UeXBlLFxuICAgZVJGSURfTm90aWZpY2F0aW9uQW5kRXJyb3JDb2RlcyxcbiAgIGVSRklEX1Bhc3N3b3JkX1R5cGUsXG4gICBlUkZJRF9TREtfUHJvZmlsZXJUeXBlLFxuICAgZVJGSURfVGVybWluYWxUeXBlLFxuICAgZVJQUk1fQXV0aGVudGljaXR5LFxuICAgZVJQUk1fRmllbGRWZXJpZmljYXRpb25SZXN1bHQsXG4gICBlUlBSTV9MaWdodHMsXG4gICBlUlBSTV9SZXN1bHRUeXBlLFxuICAgZVJQUk1fU2VjdXJpdHlGZWF0dXJlVHlwZSxcbiAgIGVTaWduTWFuYWdlbWVudEFjdGlvbixcbiAgIGVWaXN1YWxGaWVsZFR5cGUsXG4gICBGb250U3R5bGUsXG4gICBGcmFtZVNoYXBlVHlwZSxcbiAgIExDSUQsXG4gICBQS0RSZXNvdXJjZVR5cGUsXG4gICBQcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMsXG4gICBSR0xNZWFzdXJlU3lzdGVtLFxuICAgU2NlbmFyaW9JZGVudGlmaWVyLFxuICAgTGluZUNhcCxcbiAgIFVJSW50ZXJmYWNlT3JpZW50YXRpb25NYXNrLFxuICAgQVZDYXB0dXJlU2Vzc2lvblByZXNldCxcbiAgIEFWQ2FwdHVyZURldmljZVBvc2l0aW9uLFxuICAgVUlWaWV3Q29udGVudE1vZGUsXG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRG9jdW1lbnRSZWFkZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC1yZWFkZXItYXBpJyxcbiAgcGx1Z2luUmVmOiAnRG9jdW1lbnRSZWFkZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JlZ3VsYWZvcmVuc2ljcy9Eb2N1bWVudFJlYWRlci1Db3Jkb3ZhLVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QVBJVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXZhaWxhYmxlU2NlbmFyaW9zKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBpc1JGSURBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSgpXG4gIGdldENvcmVNb2RlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRDb3JlVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RGF0YWJhc2VEYXRlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXREYXRhYmFzZUlEKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXREYXRhYmFzZVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSgpXG4gIGdldERvY3VtZW50UmVhZGVySXNSZWFkeSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RG9jdW1lbnRSZWFkZXJTdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSgpXG4gIGdldERhdGFiYXNlQ291bnRyaWVzTnVtYmVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXREYXRhYmFzZURvY3VtZW50c051bWJlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2VsZWN0ZWRTY2VuYXJpbygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U2Vzc2lvbkxvZ0ZvbGRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RGF0YWJhc2VEZXNjcmlwdGlvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBzaG93U2Nhbm5lcigpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnROZXdQYWdlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydE5ld1Nlc3Npb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgc3RhcnRSRklEUmVhZGVyKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBzdG9wUkZJRFJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcFNjYW5uZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSgpXG4gIGRlaW5pdGlhbGl6ZVJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgaXNBdXRoZW50aWNhdG9yQXZhaWxhYmxlRm9yVXNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRDb25maWcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSgpXG4gIGdldFJmaWRTY2VuYXJpbygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0TGljZW5zZUV4cGlyeURhdGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSgpXG4gIGdldExpY2Vuc2VDb3VudHJ5RmlsdGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBsaWNlbnNlSXNSZmlkQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRDYW1lcmFTZXNzaW9uSXNQYXVzZWQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSgpXG4gIHJlbW92ZURhdGFiYXNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBjYW5jZWxEQlVwZGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXRDb25maWd1cmF0aW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBjbGVhclBLRENlcnRpZmljYXRlcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICByZWFkUkZJRCgpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UmZpZFNlc3Npb25TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSgpXG4gIHNldEVuYWJsZUNvcmVMb2dzKGFyZzA6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBhZGRQS0RDZXJ0aWZpY2F0ZXMoYXJnMDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSgpXG4gIHNldENhbWVyYVNlc3Npb25Jc1BhdXNlZChhcmcwOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U2NlbmFyaW8oYXJnMDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgcmVjb2duaXplSW1hZ2VzKGFyZzA6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHNob3dTY2FubmVyV2l0aENhbWVyYUlEKGFyZzA6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJ1bkF1dG9VcGRhdGUoYXJnMDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSgpXG4gIHNldENvbmZpZyhhcmcwOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UmZpZFNjZW5hcmlvKGFyZzA6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBpbml0aWFsaXplUmVhZGVyKGFyZzA6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoKVxuICBpbml0aWFsaXplUmVhZGVyV2l0aERhdGFiYXNlUGF0aChhcmcwOiBhbnksIGFyZzE6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHByZXBhcmVEYXRhYmFzZShhcmcwOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICByZWNvZ25pemVJbWFnZShhcmcwOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UmZpZFNlc3Npb25TdGF0dXMoYXJnMDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgcmVjb2duaXplSW1hZ2VGcmFtZShhcmcwOiBhbnksIGFyZzE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlY29nbml6ZUltYWdlV2l0aE9wdHMoYXJnMDogYW55LCBhcmcxOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICByZWNvZ25pemVWaWRlb0ZyYW1lKGFyZzA6IGFueSwgYXJnMTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgc2hvd1NjYW5uZXJXaXRoQ2FtZXJhSURBbmRPcHRzKGFyZzA6IGFueSwgYXJnMTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgcmVjb2duaXplSW1hZ2VXaXRoSW1hZ2VJbnB1dFBhcmFtcyhhcmcwOiBhbnksIGFyZzE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlY29nbml6ZUltYWdlV2l0aENhbWVyYU1vZGUoYXJnMDogYW55LCBhcmcxOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxufSJdfQ==