import { PATHS } from '../routes/constants';

export const OPENAI_REQUEST_URL = 'https://api.openai.com/v1/chat/completions';
export const OPENAI_MODEL = 'gpt-4';

export const ERROR_MESSAGES = {
    EMAIL_NOT_FOUND: 'There is no account with this email',
    INVALID_PASSWORD: 'Your Password is incorrect',
    EMAIL_AREADY_IN_USE: 'This email is already in use',
    USER_NOT_FOUND: 'There is no account with this email',
    INVALID_EMAIL: 'Invalid email',
    AUTH_FAILED: 'Authentication failed',
    WRONG_PASSWORD: 'Your Password is incorrect',
    TOO_MANY_REQUESTS: 'Too many requests',
};

export const LINK_TYPES = {
    REACT_ROUTE: 'REAECT_ROUTE',
    EXTERNAL: 'EXTERNAL',
};

export const navigation = [
    { name: 'Home', path: PATHS.HOME, type: '' },
    { name: 'Adverts', path: '', type: '' },
    { name: 'Station IDs', path: '', type: '' },
    { name: 'Events', path: PATHS.EVENTS, type: '' },
    { name: 'LiveRadio', path: 'https://wavem.io/', type: LINK_TYPES.EXTERNAL },
];
export const footerNavigation = {
    solutions: [
        { name: 'Automation', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Production', href: 'https://cloudvoiceprocessor.com/' },
        { name: 'Music For Business', href: 'https://vivecamedia.com/' },
    ],
    support: [
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
};

export const ACTIONS = {
    ADD_FREE_TEXT: 'ADD_FREE_TEXT',
    ADD_IMPOSSIBLE_TRIVIA: 'ADD_IMPOSSIBLE_TRIVIA',
    ADD_PHONE_TOPIC: 'ADD_PHONE_TOPIC',
    ADD_TODAY_BIRTHDAY: 'ADD_TODAY_BIRTHDAY',
    ADD_TODAY_HISTORY: 'ADD_TODAY_HISTORY',
    ADD_MUSIC: 'ADD_MUSIC',
    ADD_GENERIC_BREAK: 'ADD_GENERIC_BREAK',
    CITY_WEATHER: 'CITY_WEATHER',
    IMPORT_LOGS: 'IMPORT_LOGS',
};

export const LOG_COLORS = {
    music: '#7dd3fc',
    link: '#ea580c',
    advert: '#4ade80',
    live: '#dc2626',
};

export const LOG_EVENT_TYPES = {
    Song: 'Song',
    Link: 'Link',
    RelatedLink: 'RelatedLink',
    SpotBlockStart: 'SpotBlockStart',
};

export const EVENT_TYPES_CONFIG = {
    [LOG_EVENT_TYPES.Song]: {
        color: '#7dd3fc',
    },
    [LOG_EVENT_TYPES.Link]: {
        color: '#fcd34d',
    },
    [LOG_EVENT_TYPES.RelatedLink]: {
        color: '#fcd34d',
    },
    [LOG_EVENT_TYPES.SpotBlockStart]: {
        color: '#4ade80',
    },
    Live: {
        color: '#dc2626',
    },
};

export const no_bg_music = 'No Background Music';
export const no_sfx = 'No SFX';
