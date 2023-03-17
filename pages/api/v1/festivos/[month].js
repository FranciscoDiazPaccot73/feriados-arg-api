import axios from "axios";

import { getFullYear, getMonthBasedOnIndex } from "@/utils";
import { FESTIVOS_BASE_URL } from "@/utils/constants";

export default async function handler(req, res) {
  const { month } = req.query;

  try {
    const currentYear = getFullYear();

    const { data } = await axios.get(`${FESTIVOS_BASE_URL}/${currentYear}`)

    const festivoFormatted = data.map((monthInfo, index) => {
      return { month: getMonthBasedOnIndex(index), dates: monthInfo }
    })
    .find(festivo => festivo.month?.toUpperCase() === month.toUpperCase())

    if (!festivoFormatted) res.status(400).json({ message: "Invalid month name" })

    res.status(200).json(festivoFormatted)
  } catch (error) {
    res.status(500).json(error)
  }
}
