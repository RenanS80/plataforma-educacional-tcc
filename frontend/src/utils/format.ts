import { format } from 'date-fns';

// Formata a data no padrão DD/MM/AAAA
export const formatLocalDate = (date: string, pattern: string) => {
    const dt = new Date(date);
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    return format(dtDateOnly, pattern);
}

// Configura a URL dos cursos, eventos e recursos 
export const urlConfigure = (link: string | undefined) => {
    return link?.startsWith('www') || !link?.startsWith('http') || !link?.startsWith('https') ?
    'https://'.concat(link as string) : link
}

// Padroniza a descrição dos cursos, eventos e recursos adicionando ponto final quando não há
export const descriptionConfigure = (description: string | undefined) => {
    return !description?.endsWith('.') ? description?.concat('.') : description
}


