/**
 * Интерфейс агента
 *
 * @prop {number} id - айди агента
 * @prop {string} lastname - фамилия агента
 * @prop {string} firstname - имя агента
 * @prop {string} patronymic - отчество агента
 * @prop {number} proportion - доля агента
 */
export interface IAgent {
    id: number;
    lastname: string;
    firstname: string;
    patronymic: string;
    proportion: number;
}
