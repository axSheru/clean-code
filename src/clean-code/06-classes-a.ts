(() => {

    // No aplicando el principio de responsabilidad única.

    type Gender = 'M'|'F';

    class Person {

        // Forma larga.
        /* public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor( name: string, gender: Gender, birthdate: Date ) {

            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;

        } */

        // Forma corta.
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}

    }

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super( name, gender, birthdate );
            this.lastAccess = new Date();
        }

        checkCreadentials() {
            return true;
        }

    }

    class UserSettings extends User {

        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super( email, role, name, gender, birthdate)
        }

    }

    /* const newPerson = new Person( 'Laura', 'F', new Date( '1966-09-29' ) );
    console.log({ newPerson }); */

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'lau@test.com',
        'Admin',
        'Laura Ríos',
        'F',
        new Date( '1966-09-29' )
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCreadentials() });

})();