// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
enum TypesOfMedia {
	Video = 'video',
	Audio = 'audio'
};
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
enum FormatsOfMedia {
	Mp4 = '.mp4',
	Mov = '.mov',
	Mkv = '.mkv',
	Flv = '.flv',
	webM = '.webM',
}

// Описание интерфейса, в котором: name, type, format, subtitles, marks
interface IMedia {
	name: string;
	type: TypesOfMedia;
	format: FormatsOfMedia;
	subtitles?: string;
	marks?: unknown;
}

function playMedia (
	{ name, type, format, subtitles, marks }: IMedia = {
		name: "example_video",
		type: TypesOfMedia.Video,
		format: FormatsOfMedia.Mp4,
	}
): string {
	let marksLog: string;

	if (Array.isArray(marks)) {
		marksLog = marks.join(', ');
	} else if (typeof marks === 'string') {
		marksLog = marks;
	} else {
		marksLog = "Unsupported type of marks";
	}

	console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);

	return "Media started";
}

playMedia({
	name: "WoW",
	format: FormatsOfMedia.Mp4,
	type: TypesOfMedia.Video,
	marks: ["4:30", "5:40"],
});
