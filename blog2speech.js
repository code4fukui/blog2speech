import { fetchSpeech } from "https://code4fukui.github.io/openai-speech/fetchSpeech.js"
import { BlogFukuno } from "./BlogFukuno.js";

const voices = [
  "echo", "alloy", "echo", "fable", "onyx", "nova", "shimmer",
];

const n = Deno.args[0] || 4325;
const voice = Deno.args[1] || "echo"; // "alloy", "echo", "fable", "onyx", "nova", "shimmer"

const content = await BlogFukuno.fetchContent(n);
console.log(content);

if (voice == "all") {
  for (const voice of voices) {
    const res = await fetchSpeech(content, { voice });
    await Deno.writeFile("fukuno_blog_" + n + "_" + voice + ".mp3", res);
  }
} else {
  const res = await fetchSpeech(content, { voice });
  await Deno.writeFile("fukuno_blog_" + n + "_" + voice + ".mp3", res);
}
