
import subforms from './questions.json';

export default (qid, normalize) => {


    if (subforms[qid].tipe === 'radio') {

        return {
            jawaban: normalize.Jawab_Pilih,
            kondisi: normalize.Jawaban_H1,
            jawaban_lainnya: normalize.Lainnya
        }
    } else if (subforms[qid].tipe === 'number') {

        return {
            jawaban: normalize.Jawaban_H1.toString(),
            jawaban_lainnya: normalize.Lainnya
        }
    } else if (subforms[qid].tipe === 'checkbox') {

        return {
            jawaban: normalize.Jawab_Pilih,
            kondisi: normalize.Jawaban_H1,
            jawaban_lainnya: normalize.Lainnya
        }

    } else if (subforms[qid].tipe === 'subformradio') {

        const answer1 = normalize.answer[0];
        const answer2 = normalize.answer[1];
        const answer3 = normalize.answer[2];
        const answer4 = normalize.answer[3];

        return {
            jawabanA: answer1.pilihanpk,
            jawaban: answer2.pilihanpk,
            jawabanC: answer3.pilihanpk,
            jawabanD: answer4.pilihanpk
        }
    }

    return {}

}