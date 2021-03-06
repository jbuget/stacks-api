'use strict';

const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const Server = require('../app/server');

lab.experiment('Basic HTTP Tests', () => {

    lab.test('/', (done) => {

        Server.inject({ method: 'GET', url: '/' }, (response) => {

            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response.result).to.include({
                'hello': '/hello{/name}',
                'people': '/people{/person_id}',
                'projects': '/projects{/project_id}'
            });
            done();
        });
    });
});
