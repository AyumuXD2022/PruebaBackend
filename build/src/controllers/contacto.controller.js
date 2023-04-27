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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoController = void 0;
const logger_1 = __importDefault(require("../../lib/logger"));
const contacto_model_1 = __importDefault(require("../models/contacto.model"));
class ContactoController {
    findAllContactos() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                contacto_model_1.default.find({}, null, (err, contactosFindAll) => {
                    if (err) {
                        logger_1.default.error('Error to find al contacts');
                        return reject({ ok: false, message: 'Contacts no encontados', response: null, code: 500 });
                    }
                    return resolve({ ok: true, message: 'Contacto encontrado con existo', response: contactosFindAll, code: 200 });
                });
            });
        });
    }
    createContacto(contacto) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!contacto) {
                    logger_1.default.error("Contacto no created " + contacto);
                    return reject({ ok: false, message: 'Datos incompleto', response: null, code: 400 });
                }
                contacto_model_1.default.create(contacto, (err, contactoCreated) => {
                    if (err) {
                        logger_1.default.error(err);
                        return reject({ ok: false, message: 'Error en servidor', response: null, code: 500 });
                    }
                    logger_1.default.info('Contactos sucessfully created');
                    return resolve({ ok: true, message: 'Contacto creado con existo', response: contactoCreated, code: 200 });
                });
            });
        });
    }
    contactoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!id) {
                    logger_1.default.error("Contacto no found ");
                    return reject({ ok: false, message: `No se proporciono el id`, response: null, code: 400 });
                }
                contacto_model_1.default.findOne({ _id: id }, null, (err, contactoFindById) => {
                    if (err) {
                        logger_1.default.error(err);
                        return reject({ ok: false, message: `No se encontro el contacto`, response: null, code: 500 });
                    }
                    if (!contactoFindById) {
                        return reject({ ok: false, message: `No se encontro el contacto por Id ${id}`, response: null, code: 404 });
                    }
                    return resolve({ ok: true, message: 'Contacto encontrado con existo', response: contactoFindById, code: 200 });
                });
            });
        });
    }
    contactoByName(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!nombre) {
                    logger_1.default.error("Contacto no found ");
                    return reject({ ok: false, message: `No se proporciono el nombre`, response: null, code: 400 });
                }
                contacto_model_1.default.findOne({ nombre: nombre }, null, (err, contactoByNombre) => {
                    if (err) {
                        logger_1.default.error(err);
                        return reject({ ok: false, message: `No se encontro el contacto`, response: null, code: 500 });
                    }
                    if (!contactoByNombre) {
                        return reject({ ok: false, message: `No se encontro el contacto llamado ${nombre}`, response: null, code: 404 });
                    }
                    return resolve({ ok: true, message: 'Contacto encontrado con existo', response: contactoByNombre, code: 200 });
                });
            });
        });
    }
    contactoByApellido(apellido) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!apellido) {
                    logger_1.default.error("Contacto no found ");
                    return reject({ ok: false, message: `No se proporciono el apellido`, response: null, code: 400 });
                }
                contacto_model_1.default.findOne({ apellido: apellido }, null, (err, contactoByLastName) => {
                    if (err) {
                        logger_1.default.error(err);
                        return reject({ ok: false, message: `No se encontro el contacto`, response: null, code: 500 });
                    }
                    if (!contactoByLastName) {
                        return reject({ ok: false, message: `No se encontro el contacto llamado ${apellido}`, response: null, code: 404 });
                    }
                    return resolve({ ok: true, message: 'Contacto encontrado con existo', response: contactoByLastName, code: 200 });
                });
            });
        });
    }
    contactoByTelefono(telefono) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!telefono) {
                    logger_1.default.error("Contacto no found ");
                    return reject({ ok: false, message: `No se proporciono el telefono`, response: null, code: 400 });
                }
                contacto_model_1.default.findOne({ telefono: telefono }, null, (err, contactoByPhone) => {
                    if (err) {
                        logger_1.default.error(err);
                        return reject({ ok: false, message: `No se encontro el contacto`, response: null, code: 500 });
                    }
                    if (!contactoByPhone) {
                        return reject({ ok: false, message: `No se encontro el contacto con numero ${telefono}`, response: null, code: 404 });
                    }
                    return resolve({ ok: true, message: 'Contacto encontrado con existo', response: contactoByPhone, code: 200 });
                });
            });
        });
    }
    updateByApellido(apellido, contacto) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!apellido) {
                    logger_1.default.error("Contacto no found ");
                    return reject({ ok: false, message: `No se proporciono el apellido`, response: null, code: 400 });
                }
                contacto_model_1.default.findOneAndUpdate({ apellido: apellido }, contacto, (err, contactoUpdateByLastName) => {
                    if (err) {
                        logger_1.default.error(err);
                        return reject({ ok: false, message: `No se encontro el contacto`, response: null, code: 500 });
                    }
                    if (!contactoUpdateByLastName) {
                        return reject({ ok: false, message: `No se encontro el contacto con apellido ${apellido}`, response: null, code: 404 });
                    }
                    return resolve({ ok: true, message: 'Contacto se actualizo con existo', response: contacto, code: 200 });
                });
            });
        });
    }
    updateByNombre(nombre, contacto) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!nombre) {
                    logger_1.default.error("Contacto no found ");
                    return reject({ ok: false, message: `No se proporciono el nombre`, response: null, code: 400 });
                }
                contacto_model_1.default.findOneAndUpdate({ nombre: nombre }, contacto, (err, contactoUpdateName) => {
                    if (err) {
                        logger_1.default.error(err);
                        return reject({ ok: false, message: `No se encontro el contacto`, response: null, code: 500 });
                    }
                    if (!contactoUpdateName) {
                        return reject({ ok: false, message: `No se encontro el contacto llamado ${nombre}`, response: null, code: 404 });
                    }
                    return resolve({ ok: true, message: 'Contacto se actualizo con existo', response: contacto, code: 200 });
                });
            });
        });
    }
    updateByPhone(telefono, contacto) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!telefono) {
                    logger_1.default.error("Contacto no found ");
                    return reject({ ok: false, message: `No se proporciono el telefono`, response: null, code: 400 });
                }
                contacto_model_1.default.findOneAndUpdate({ telefono: telefono }, contacto, (err, contactoUpdatePhone) => {
                    if (err) {
                        logger_1.default.error(err);
                        return reject({ ok: false, message: `No se encontro el contacto`, response: null, code: 500 });
                    }
                    if (!contactoUpdatePhone) {
                        return reject({ ok: false, message: `No se encontro el contacto con numero ${telefono}`, response: null, code: 404 });
                    }
                    return resolve({ ok: true, message: 'Contacto se actualizo con existo', response: contacto, code: 200 });
                });
            });
        });
    }
    updateById(id, contacto) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!id) {
                    logger_1.default.error("Contacto no found ");
                    return reject({ ok: false, message: `No se proporciono el id`, response: null, code: 400 });
                }
                contacto_model_1.default.findOneAndUpdate({ _id: id }, contacto, (err, contactoUpdatePhone) => {
                    if (err) {
                        logger_1.default.error(err);
                        return reject({ ok: false, message: `No se encontro el contacto`, response: null, code: 500 });
                    }
                    if (!contactoUpdatePhone) {
                        return reject({ ok: false, message: `No se encontro el contacto con id ${id}`, response: null, code: 404 });
                    }
                    return resolve({ ok: true, message: 'Contacto se actualizo con existo', response: contacto, code: 200 });
                });
            });
        });
    }
    contactoDeleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!id) {
                    logger_1.default.error("Contacto no found ");
                    return reject({ ok: false, message: `No se proporciono el id`, response: null, code: 400 });
                }
                contacto_model_1.default.findOneAndDelete({ _id: id }, null, (err, contactoFindById) => {
                    if (err) {
                        logger_1.default.error(err);
                        return reject({ ok: false, message: `No se encontro el contacto`, response: null, code: 500 });
                    }
                    if (!contactoFindById) {
                        return reject({ ok: false, message: `No se encontro el contacto por Id ${id}`, response: null, code: 404 });
                    }
                    return resolve({ ok: true, message: 'Contacto se borro de la manera correcta', response: contactoFindById, code: 200 });
                });
            });
        });
    }
}
exports.ContactoController = ContactoController;
