import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { styles } from "../style"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  return (
    <div>
      
    </div>
  )
}

export default Contact