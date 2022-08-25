(() => {

    // No aplicando el principio de responsabilidad única.

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {

        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor( { name, gender, birthdate }: PersonProps ){
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }

    }

    interface UserProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor( { birthdate, email, gender, name, role }: UserProps ){
            super( { name, gender, birthdate } );
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCreadentials() {
            return true;
        }

    }

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings extends User {

        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({ birthdate, email, gender, lastOpenFolder, name, role, workingDirectory }: UserSettingsProps ){
            super({ email, role, name, gender, birthdate });
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }

    }

    /* const newPerson = new Person( 'Laura', 'F', new Date( '1966-09-29' ) );
    console.log({ newPerson }); */

    const userSettings = new UserSettings({
        birthdate: new Date( '1966-09-29' ),
        email: 'lau@test.com',
        gender: 'F',
        lastOpenFolder: '/home',
        name: 'Laura Ríos',
        role: 'Admin',
        workingDirectory: '/usr/home'
    });

    console.log({ userSettings, areCredentialsValid: userSettings.checkCreadentials() });

})();