"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const request = (0, supertest_1.default)(app_1.default);
describe('Testing endpoints reponses', () => {
    it('should get the response from root route', async (done) => {
        const reponse = await request.get('/');
        expect(reponse.status).toBe(200);
        done();
    });
    it('should get the reponse 400 from image route for missing values', async (done) => {
        const reponse = await request.get('/image');
        expect(reponse.status).toBe(400);
        done();
    });
    it('should get the reponse 200 from image route', async (done) => {
        const reponse = await request.get('/image?name=fjord&width=100&height=100');
        expect(reponse.status).toBe(200);
        done();
    });
});
