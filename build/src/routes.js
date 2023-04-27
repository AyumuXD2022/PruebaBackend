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
const express_1 = require("express");
const logger_1 = __importDefault(require("../lib/logger"));
const contacto_controller_1 = require("./controllers/contacto.controller");
const routes = (0, express_1.Router)();
const clienteService = new contacto_controller_1.ContactoController();
routes.post('/contacto/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacto = req.body;
    try {
        const response = yield clienteService.createContacto(contacto);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
routes.get('/contacto/findAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacto = req.body;
    try {
        const response = yield clienteService.findAllContactos();
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
routes.get('/contacto/find/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const nombre = req.query.nombre;
    logger_1.default.info(nombre);
    try {
        const response = yield clienteService.contactoById(id);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
routes.get('/contacto/findName/:nombre', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nombre = req.params.nombre;
    logger_1.default.info(nombre);
    try {
        const response = yield clienteService.contactoByName(nombre);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
routes.get('/contacto/findApellido/:apellido', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apellido = req.params.apellido;
    logger_1.default.info(apellido);
    try {
        const response = yield clienteService.contactoByApellido(apellido);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
routes.get('/contacto/findByPhone/:telefono', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const telefono = parseInt(req.params.telefono);
    logger_1.default.info(telefono);
    try {
        const response = yield clienteService.contactoByTelefono(telefono);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
routes.put('/contacto/updateApellido/:apellido', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apellido = req.params.apellido;
    const contacto = req.body;
    logger_1.default.info(apellido);
    try {
        const response = yield clienteService.updateByApellido(apellido, contacto);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
routes.put('/contacto/updateNombre/:nombre', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nombre = req.params.nombre;
    const contacto = req.body;
    logger_1.default.info(nombre);
    try {
        const response = yield clienteService.updateByNombre(nombre, contacto);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
routes.put('/contacto/updateByPhone/:telefono', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const telefono = req.params.telefono;
    const contacto = req.body;
    logger_1.default.info(telefono);
    try {
        const response = yield clienteService.updateByPhone(telefono, contacto);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
routes.put('/contacto/updateById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const contacto = req.body;
    logger_1.default.info(id);
    try {
        const response = yield clienteService.updateById(id, contacto);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
routes.delete('/contacto/deleteById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    logger_1.default.info(id);
    try {
        const response = yield clienteService.contactoDeleteById(id);
        return res.status(response.code).json(response);
    }
    catch (err) {
        return res.status(err.code ? err.code : 500).json(err);
    }
}));
exports.default = routes;
