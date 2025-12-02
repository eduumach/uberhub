import { COLORS } from "@/components/calendar/constants";
import type { IEvent, IUser } from "@/components/calendar/interfaces";

export const USERS_MOCK: IUser[] = [
	{
		id: "f3b035ac-49f7-4e92-a715-35680bf63175",
		name: "rerivalley Admin",
		picturePath: null,
	},
];

const createDate = (month: number, day: number, hour: number = 0, minute: number = 0) => {
	const date = new Date(2025, month - 1, day, hour, minute);
	return date.toISOString();
};

const createEvent = (
	id: number,
	title: string,
	month: number,
	day: number,
	hour: number,
	minute: number,
	location: string,
	link: string,
	durationHours: number = 2,
	endDay?: number
): IEvent => {
	const startDate = createDate(month, day, hour, minute);
	const endDate = createDate(month, endDay || day, hour + durationHours, minute);

	return {
		id,
		startDate,
		endDate,
		title,
		color: COLORS[Math.floor(Math.random() * COLORS.length)],
		description: `📍 ${location}\n🔗 ${link}`,
		user: USERS_MOCK[0],
	};
};

export const CALENDAR_ITEMS_MOCK: IEvent[] = [
	createEvent(1, "Jornada Nacional da Inovação - Etapa Estadual", 11, 18, 8, 30, "Sesi Gravatás", "https://lembre.se/119Do"),
	createEvent(2, "Do produto ao investimento: crescendo com responsabilidade", 11, 19, 19, 0, "Casa UNA", "https://lembre.se/1d5VA"),
	createEvent(3, "CASE - Conferência anual de startups", 11, 27, 8, 0, "São Paulo", "https://lembre.se/197D5", 10, 28),
	createEvent(4, "rerivalley Podcast", 11, 17, 18, 0, "Online", "https://lembre.se/qE4AE"),
	createEvent(5, "InovARI - Empreender é para Todos!", 11, 17, 18, 30, "Araguari", "https://lembre.se/P6uuH"),
	createEvent(6, "FAGEN: Empreender é servir com propósito", 11, 17, 19, 0, "UFU", "https://lembre.se/CRFHY"),
	createEvent(7, "Conexão Direito e Negócios", 11, 17, 8, 0, "Center convention", "https://lembre.se/1gKZ0"),
	createEvent(8, "Wings/UFU Inside - Inclusão e diversidade", 11, 17, 13, 0, "UFU", "https://lembre.se/b4fWo", 8, 18),
	createEvent(9, "Conecta Talks com Alexandre Campos", 11, 17, 19, 30, "Shalom", "https://lembre.se/11rdc"),
	createEvent(10, "5º Encontro Anual de Empreendedorismo Feminino", 11, 18, 14, 0, "CDL", "https://lembre.se/FSTks"),
	createEvent(11, "Negócio em foco - Conexão e crescimento empresarial", 11, 18, 18, 30, "ACIUB", "https://lembre.se/1hMIg"),
	createEvent(12, "Bootcamp DIO/TQI Modernização com GenAI", 11, 19, 9, 0, "Online", "https://lembre.se/bootcampgenai"),
	createEvent(13, "Bootcamp Gratuito DIO/Luiza Labs Back-end Python", 11, 19, 9, 0, "Online", "https://lembre.se/JApHg"),
	createEvent(14, "Fluxo de Caixa Eficiente", 11, 21, 8, 0, "ACIUB", "https://lembre.se/oPbIw"),
	createEvent(15, "Aquecimento DevFest Triângulo", 11, 21, 19, 0, "Auditório 3Q UFU", "https://lembre.se/7QmOG"),
	createEvent(16, "Funcionários Digitais em 15 dias", 11, 21, 9, 0, "Online", "https://lembre.se/1xXBh"),
	createEvent(17, "Google DevFest Uberlândia", 11, 22, 8, 0, "Gaudium Hall", "https://lembre.se/googledevfest", 10),
	createEvent(18, "Conexão Sustentável UNA", 11, 22, 9, 0, "UNA", "https://lembre.se/HTcHj"),
	createEvent(19, "RH SUMMIT Uberlândia", 11, 24, 13, 30, "FIEMG", "https://lembre.se/rhsummit"),
	createEvent(20, "Workshop Planejamento & Adaptabilidade", 11, 24, 19, 0, "CDL Uberlândia", "https://lembre.se/BmJzZ"),
	createEvent(21, "FACOM TechWeek 2025", 11, 24, 8, 0, "UFU", "https://lembre.se/facomtechweek2025", 8, 28),
	createEvent(22, "Café Empresarial Papo de Dono", 11, 25, 7, 30, "Espaço brasal Café Don Castro", "https://lembre.se/1hbdO"),
	createEvent(23, "Bastidores do Protagonismo", 11, 25, 8, 30, "Quimica estrela", "https://lembre.se/gdeCi"),
	createEvent(24, "Sigma Talks Edição 1", 11, 25, 19, 0, "Gavea business", "https://lembre.se/10pE3", 4, 26),
	createEvent(25, "3° Workshop de lideranças em diversidade", 11, 26, 14, 0, "Sesi gravatás", "https://lembre.se/1b94b"),
	createEvent(26, "21º Meetup - Presencial - AWS User Group Triângulo", 11, 26, 19, 0, "Faculdade UNA", "https://lembre.se/4cn7M"),
	createEvent(27, "II Seminário de Inteligência Artificial", 11, 27, 8, 0, "FAU", "https://lembre.se/N8ga8"),
	createEvent(28, "JORNADA DA INOVAÇÃO E DO EMPREENDEDORISMO", 11, 27, 19, 0, "UNA", "https://lembre.se/kYSJ0"),
	createEvent(29, "Feedback na Prática", 11, 28, 8, 30, "ACIUB", "https://lembre.se/4lvmq"),
	createEvent(30, "Ideathon UbyAgro & ABCZ", 11, 28, 8, 0, "Uberaba", "https://lembre.se/rXFhg", 10, 30),
	createEvent(31, "ACTION - Lidere seu temo", 11, 29, 8, 0, "CDL", "https://lembre.se/CmFpD"),
	createEvent(32, "Lançamento Edital de Inovação CEMIG", 12, 3, 9, 0, "TBA", "SAVE THE DATE"),
	createEvent(33, "1° Meetup Eco Tech Community Triângulo", 12, 3, 19, 0, "UNA", "https://lembre.se/xk9VE"),
	createEvent(34, "Gamificação para Educação", 12, 4, 19, 30, "Av. Paulo Gracindo, 951", "https://lembre.se/i1ObC"),
	createEvent(35, "LÚMEN RH - BY RECRUTEI", 12, 5, 19, 30, "Uberlândia", "https://lembre.se/jZF6Q"),
	createEvent(36, "Joel Jota em Uberlândia", 12, 5, 20, 0, "Gaudium Hall", "https://lembre.se/14Cq2"),
];
