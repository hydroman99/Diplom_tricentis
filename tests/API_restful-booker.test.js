import { test, expect } from '@playwright/test'
import { BodyRequestbuilder } from '../src/helpers/builders/body_request.builder';


test.describe('API tests', () => {  
    const URL = 'https://restful-booker.herokuapp.com/';
    let token;
    let bodyToken;
    test.beforeEach( async ({ request }) => {
        const requestBody = {
            "username" : "admin",
            "password" : "password123"
        };
        let response = await request.post(`${URL}auth`, {
            data: requestBody
        });
        bodyToken = await response.json();
        token = bodyToken.token;
});

    test('Пингуем сервер @API', async ({ request }) => {
        let response = await request.get(`${URL}ping`);
        expect(response.status()).toBe(201);
});

    test('Проверяем валидности токена @API', async ({ request }) => {
        expect(bodyToken).toEqual(expect.objectContaining({'token': expect.any(String)}));
});

    test('Вернуть список всех бронирований @API', async ({ request }) => {
        let response = await request.get(`${URL}booking`);
        expect(response.status()).toBe(200);
        let body = await response.json();
        expect(Array.isArray(body)).toBe(true);
        body.forEach(book => {
            expect(book).toHaveProperty('bookingid');
            expect(typeof book.bookingid).toBe('number');
    });
});

    test('Вернуть одно бронирование по заданному id @API', async ({ request }) => {
        let response = await request.get(`${URL}booking/2`);
        expect(response.status()).toBe(200);
        let body = await response.json();
        expect(body).toEqual(expect.objectContaining({
            'firstname': expect.any(String),
            'lastname': expect.any(String),
            'totalprice': expect.any(Number),
            'depositpaid': expect.any(Boolean),
            'bookingdates': expect.objectContaining({
                'checkin': expect.any(String),
                'checkout': expect.any(String)
        })
    }));
});

    test('Добавить новое бронирование @API', async ({ request }) => {
        const requestBody = new BodyRequestbuilder().generateRequestBody();
        let response = await request.post(`${URL}booking`,
            {
                data: requestBody
            }
        );
        expect(response.status()).toBe(200);
        let body = await response.json();
        expect(body).toEqual(expect.objectContaining({
            'bookingid': expect.any(Number),
            'booking': expect.objectContaining(requestBody)
    }));
});

    test('Полность изменить созданное бронирование @API', async ({ request}) => {
        const requestBody = new BodyRequestbuilder().generateRequestBody();
        const requestBodyTwo = new BodyRequestbuilder().generateRequestBody();
        let responseCreateBooking = await request.post(`${URL}booking`,
            {
                data: requestBody
            }
        );
        let responseBody = await responseCreateBooking.json();
        let bookingID = responseBody.bookingid;
        let response = await request.put(`${URL}booking/${bookingID}`,
            {
                headers: {
                    Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
                },
                data: requestBodyTwo
            }
        );
        let body = await response.json();
        expect(response.status()).toBe(200);
        expect(body).toEqual(requestBodyTwo);
});

    test('Частично изменить созданное бронирование @API', async ({ request}) => {
        const requestBody = new BodyRequestbuilder().generateRequestBody();
        const requestBodyTwo = new BodyRequestbuilder().generateRequestBodyOnlyName();
        let responseCreateBooking = await request.post(`${URL}booking`,
            {
                data: requestBody
            }
        );
        let responseBody = await responseCreateBooking.json();
        let bookingID = responseBody.bookingid;
        let response = await request.patch(`${URL}booking/${bookingID}`,
            {
                headers: {
                    Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
                },
                data: requestBodyTwo
            }
        );
        expect(response.status()).toBe(200);
});

    test('Удалить бронирование @API', async ({ request}) => {
        const requestBody = new BodyRequestbuilder().generateRequestBody();
        let responseCreateBooking = await request.post(`${URL}booking`,
            {
                data: requestBody
            }
        );
        let responseBody = await responseCreateBooking.json();
        let bookingID = responseBody.bookingid;
        let response = await request.delete(`${URL}booking/${bookingID}`,
            {
                headers: {
                    Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
                }
            }
        );
        expect(response.status()).toBe(201)
    });
});
