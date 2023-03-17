import axios from "axios";

import { getFullYear, getNextHoliday, getNextOptional } from "@/utils";
import { HOLIDAYS_BASE_URL } from "@/utils/constants";

export default async function handler(req, res) {
  try {
    const currentYear = getFullYear();

    const { data } = await axios.get(`${HOLIDAYS_BASE_URL}/${currentYear}?incluir=opcional`)

    const nextOptional = getNextOptional(data)
    const nextHoliday = getNextHoliday(data)

    if (nextOptional.id !== nextHoliday.id) {
      nextOptional.warning = {
        title: `Feriado inamovible el ${nextHoliday.dia}/${nextHoliday.mes}`,
        message: nextHoliday.motivo,
      }
    }

    res.status(200).json(nextOptional)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
