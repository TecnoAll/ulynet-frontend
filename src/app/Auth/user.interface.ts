export interface IUser {
    id?: string;
    name?: string;
    surname?: string;
    username?: string;
    email?: string;
    emailStatus?: boolean;
    password?: string;
    profilePath?: string;
    universityId?: string | any;
    careerId?: string | any;
    settings?: any;
    createdAt?: Date;
    lastSeenAt?: Date;
    passwordResetToken?: string;
    passwordResetTokenExpiresAt?: number;
    emailProofToken?: string;
    emailProofTokenExpiresAt?: string;
    userType?: string | any;
    saltSecret?: string;
}