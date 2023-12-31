"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const api_1 = require("./api/api");
const uploadImage = ({ folderId, clientId, privateKey, clientEmail, file }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bodyContent = new FormData();
        bodyContent.append('folderId', folderId);
        bodyContent.append('client_id', clientId);
        bodyContent.append('private_key', privateKey);
        bodyContent.append('client_email', clientEmail);
        bodyContent.append('file', file);
        const { data } = yield api_1.api.post("/upload-image", bodyContent);
        return data;
    }
    catch (err) {
        return err;
    }
});
exports.uploadImage = uploadImage;
//# sourceMappingURL=index.js.map