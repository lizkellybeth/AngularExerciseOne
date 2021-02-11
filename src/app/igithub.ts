import { logging } from 'protractor';


export interface IOrganization {
    login: string;
    id: number;
    node_id: string;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    descrption: string;
}

export interface IUser {
    login: string;
    id: number;
    type: string;
    site_admin: boolean;
}