import axios from "axios";

import { getFullYear, getNextHoliday } from "@/utils";
import { HOLIDAYS_BASE_URL } from "@/utils/constants";

export default async function handler(req, res) {
  try {
    const currentYear = getFullYear();

    const { data } = await axios.get(`${HOLIDAYS_BASE_URL}/${currentYear}`)

    const nextHoliday = getNextHoliday(data)

    res.status(200).json(nextHoliday)
  } catch (error) {
    res.status(500).json(error)
  }
}
