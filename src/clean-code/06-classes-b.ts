(() => {

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate:  Date;
        gender:     Gender;
        name:       string;
    }

    class Person {
        public birthdate:   Date;
        public gender:      Gender;
        public name:        string;

        constructor({ name, gender, birthdate }: PersonProps ) {
            this.name =         name;
            this.gender =       gender;
            this.birthdate =    birthdate;
        }
    }

    interface UserProps {
        birthdate:      Date;
        email:          string;
        gender:         Gender;
        lastAccess:     Date;
        name:           string;
        role:           string;
    }

    class User extends Person{
        public email:       string;
        public lastAccess:  Date;
        public role:        string;

        constructor({
            email,
            role,
            name,
            gender,
            birthdate
        }: UserProps ) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate:          Date,
        email:              string,
        gender:             Gender,
        lastAccess:         Date,
        lastOpenFolder:     string,
        name:               string,
        role:               string,
        workingDirectory:   string,
    }

    class UserSettings extends User {
        public workingDirectory:    string;
        public lastOpenFolder:      string;

        constructor({
            birthdate,
            email,
            gender,
            lastAccess,
            lastOpenFolder,
            name,
            role,
            workingDirectory,
        }: UserSettingsProps ) {
            super({ birthdate, email, gender, lastAccess, name, role });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory:   'usr/home',
        lastOpenFolder:     '/home',
        email:              'fernando@google.com',
        role:               'admin',
        lastAccess:         new Date('2025-01-28'),
        name:               'Fernando',
        gender:             'M',
        birthdate:          new Date('1985-10-21'),
    })

    console.log({ userSettings });

})();