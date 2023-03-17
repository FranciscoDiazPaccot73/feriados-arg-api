import axios from "axios";

import { getFullYear, getMonthBasedOnIndex } from "@/utils";
import { FESTIVOS_BASE_URL } from "@/utils/constants";

export default async function handler(req, res) {
  try {
    const currentYear = getFullYear();

    const { data } = await axios.get(`${FESTIVOS_BASE_URL}/${currentYear}`)

    const festivosFormatted = data.map((monthInfo, index) => {
      return { month: getMonthBasedOnIndex(index), dates: monthInfo }
    })

    res.status(200).json(festivosFormatted)
  } catch (error) {
    res.status(500).json(error)
  }
}
