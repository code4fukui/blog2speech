import { getRensaFirstContent } from "./getRensaFirstContent.js";
import { fetchBin } from "https://js.sabae.cc/fetchBin.js";
import { Rensa } from "https://rensadata.github.io/Rensa-es/Rensa.js";
import { html2txt } from "https://code4fukui.github.io/html2txt/html2txt.js";

export class BlogFukuno {
  static async fetchContent(n) {
    const url = "https://fukuno.jig.jp/rensa/" + Math.floor(n / 100) + "/" + n + ".rensa";
    const bin = await fetchBin(url);
    const rensa = Rensa.fromCBOR(bin);
    const obj = await getRensaFirstContent(rensa);
    const content = obj.title + "\n" + html2txt(obj.body);
    return content;
  };
}
