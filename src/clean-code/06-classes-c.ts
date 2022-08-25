(() => {

    // Aplicando el principio de responsabilidad única.
    // Priorizar la composición frente a la herencia.

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
        email: string;
        role: string;
    }

    class User {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor( { email, role }: UserProps ){
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCreadentials() {
            return true;
        }

    }

    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {

        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({ lastOpenFolder, workingDirectory }: SettingsProps ){
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
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

    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor( {
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory
        }: UserSettingsProps ){
            this.person = new Person({ birthdate, gender, name });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }

    }

    const userSettings = new UserSettings({
        birthdate: new Date( '1966-09-29' ),
        email: 'lau@test.com',
        gender: 'F',
        lastOpenFolder: '/home',
        name: 'Laura Ríos',
        role: 'Admin',
        workingDirectory: '/usr/home'
    });

    console.log({ userSettings, areCredentialsValid: userSettings.user.checkCreadentials() });

})();