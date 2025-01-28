(() => {

    type Gender = 'M' | 'F';

    class Person {

        constructor( 
            public name: string,
            public gender: Gender,
            public birthdate: Date 
        ) {}
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            public lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super( name, gender, birthdate );
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            public email: string,
            public role: string,
            public lastAccess: Date,
            public name: string,
            public gender: Gender,
            public birthdate: Date,

        ) {
            super( email, role, lastAccess, name, gender, birthdate )
        }
    }

    const userSettings = new UserSettings(
        'usr/home',
        '/home',
        'fernando@google.com',
        'admin',
        new Date('2025-01-28'),
        'Fernando',
        'M',
        new Date('1985-10-21'),
    )

    console.log({ userSettings });

})();