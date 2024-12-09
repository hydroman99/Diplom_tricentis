import { faker } from "@faker-js/faker";

export class UserBuilder {
    addBio() {
        this.userBio = faker.music.genre();
        return this;
    }
    addEmail() {
        this.userEmail = faker.internet.email();
        return this;
    }
    addFirstName() {
        this.userFirstName = faker.person.firstName();
        return this;
    }
    addLastName() {
        this.userLastName = faker.person.lastName();
        return this;
    }
    addPassword() {
        this.userPassword = faker.internet.password();
        return this;
    }
    generate() {
        const copied = structuredClone (
            {
                userEmail: this.userEmail,
                userFirstName: this.userFirstName,
                userPassword: this.userPassword,
                userBio: this.userBio,
                userLastName: this.userLastName
            }
        );
        return copied;
    }
}