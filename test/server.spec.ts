import chai, { expect, assert } from "chai"
import chaiHttp from "chai-http";
import app from "../src/server";

chai.use(chaiHttp);


describe('server testing', () => {
    it('GET "/"', async () => {

        const response = await chai.request(app).get("/")

        console.log(response);


        expect(response).to.have.status(200);
    })
})