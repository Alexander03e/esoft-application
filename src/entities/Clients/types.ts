/**
 * Интерфейс клиента
 *
 * @prop {number} id - айди клиента
 * @prop {string} [lastname] - фамилия клиента (опционально)
 * @prop {string} [firstname] - имя клиента (опционально)
 * @prop {string} [patronymic] - отчество клиента (опционально)
 * @prop {string} [phone] - телефон клиента (опционально)
 * @prop {string} [email] - электронная почта клиента (опционально)
 */
export interface IClient {
    id: number;
    lastname?: string;
    firstname?: string;
    patronymic?: string;
    phone?: string;
    email?: string;
}
