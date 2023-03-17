import axios from "axios";

import { getFullYear } from "@/utils";
import { FESTIVOS_BASE_URL } from "@/utils/constants";

export default async function handler(req, res) {
  const { q } = req.query;

  try {
    const currentYear = getFullYear();

    const { data } = await axios.get(`${FESTIVOS_BASE_URL}/${currentYear}`)
    let festivoFormatted = data;
  
    if (q) {
      festivoFormatted = [];
      data.forEach((info, index) => {
        const entries = Object.entries(info);
        entries.forEach(entry => {
          if (typeof entry[1] === 'string' && entry[1].toUpperCase().includes(q.toUpperCase())){
            festivoFormatted.push({ date: `${entry[0]}/${index + 1}/${currentYear}`, message: entry[1] })
          }
        })
      })
    }

    res.status(200).json(festivoFormatted)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
