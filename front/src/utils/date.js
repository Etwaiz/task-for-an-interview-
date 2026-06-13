import { format } from 'date-fns'
import { uk } from 'date-fns/locale'

export const formatDate = (date) => {
    if (!date) return ''
    return format(new Date(date), 'dd.MM.yyyy')
}

export const formatDateTime = (date) => {
    if (!date) return ''
    return format(new Date(date), 'dd.MM.yyyy HH:mm')
}

export const formatLongDate = (date) => {
    if (!date) return ''
    return format(new Date(date), 'dd MMMM yyyy', { locale: uk })
}

export const formatTime = (date) => {
    if (!date) return ''
    return format(new Date(date), 'HH:mm')
}