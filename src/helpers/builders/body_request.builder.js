import { faker } from "@faker-js/faker";
import { generateRandomDate, addRandomDays } from  '../functions/randomDates'

export  class BodyRequestbuilder {
    constructor(){
        this.randomDate = generateRandomDate();
        this.secondRandomDate = addRandomDays(this.randomDate);
    }
    generateRequestBody() {
        const requestBody = structuredClone (
            {
                "firstname" : faker.person.firstName(),
                "lastname" : faker.person.lastName(),
                "totalprice" : faker.number.int({ max: 1000 }),
                "depositpaid" : faker.datatype.boolean(),
                "bookingdates" : {
                    "checkin" : this.randomDate,
                    "checkout" : this.secondRandomDate
                },
                "additionalneeds" : faker.airline.airline()
        }
    )
        return requestBody;
    }
    generateRequestBodyOnlyName() {
        const requestBody = structuredClone (
            {
                "firstname" : faker.person.firstName(),
                "lastname" : faker.person.lastName(),
        }
    )
        return requestBody;
    }
}