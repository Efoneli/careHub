import cancerCareImage from ".././images/cancercare.png"
import virtualUrgentCareImage from "../images/virtualurgentcare.jpeg"
import chronicConditionImage from "../images/teleconsult.jpeg"
import telepsychiatryImage from "../images/mentalhealth.jpeg"
import teleNeurologyImage from "../images/neurology.jpeg"
import teleBurnTreatmentImage from "../images/burn.jpeg"


export const serviceDetails = [
  {
    name: "Cancer Care",
    history: "The study of cancer, known as oncology, has been the work of countless doctors and scientists around the world whose discoveries in various fields have made oncology what it is today. The earliest known mention of cancer was found in a papyrus document from ancient Egypt around 3000 BCE. It described tumors found in the breast, which were treated by destroying the tissue with a hot instrument called 'the fire drill', a technique we now call 'cauterization'. In 1761, Giovanni Morgagni began to use autopsies to discover the reasons why people died, which started the burgeoning study of cancers and led to the growth of scientific oncology. Since then, our understanding of what causes cancer and how it can be treated has evolved rapidly, leading to remarkable progress in cancer prevention, early detection, and treatment.",
    image: cancerCareImage,
    cure: {
      description: "Cancer care can be effectively managed through telemedicine methods. This involves a comprehensive approach that includes:",
      methods: [
        {
          name: "Virtual Consultations",
          details: "Patients can have video consultations with oncologists and other healthcare professionals. This allows for regular check-ups, discussion of symptoms, and review of treatment plans without the need for physical travel."
        },
        {
          name: "Remote Patient Monitoring",
          details: "Patients' health data can be monitored remotely using various digital devices. This can include tracking vital signs, medication management, and symptom tracking. Any significant changes can be flagged for immediate attention by the healthcare team."
        },
        {
          name: "Digital Health Technologies",
          details: "Digital platforms can provide educational resources about cancer, treatment options, side effects management, and lifestyle modifications. They can also facilitate virtual support groups where patients can connect with others going through similar experiences."
        },
        {
          name: "Tele-Rehabilitation",
          details: "Post-treatment care and rehabilitation can also be managed remotely. This can include virtual physiotherapy sessions, dietary advice, and mental health support."
        },
        {
          name: "Electronic Health Records (EHRs)",
          details: "EHRs ensure that all healthcare providers involved in a patient's care have access to the same information. This promotes coordinated care and helps avoid unnecessary repetition of diagnostic tests."
        }
      ],
      note: "While telemedicine has made cancer care more accessible and convenient, it's important to note that some aspects of care may still require in-person visits. These could include diagnostic tests, certain treatments like chemotherapy or radiation therapy, and surgeries. Telemedicine is a powerful tool in cancer care, but it complements traditional healthcare rather than replacing it entirely."
    },
    doctors: ["Dr. Chinedu Simeon Aruah, MD, MPH, FWACS"],
  },
   {
  name: "Virtual Urgent Care",
  history: "The advent of telemedicine has revolutionized the way we approach urgent care. Traditionally, urgent care involved visiting a healthcare facility for immediate but non-emergency medical attention. With the rise of digital health technologies, it's now possible to provide urgent care services remotely, making healthcare more accessible and convenient.",
  image: virtualUrgentCareImage,
  cure: {
    description: "Virtual urgent care can be effectively provided through telemedicine methods. This involves a comprehensive approach that includes:",
    methods: [
      {
        name: "Virtual Consultations",
        details: "Patients can have video consultations with healthcare professionals for immediate but non-emergency medical concerns. This allows for quick assessment, advice, and treatment without the need for physical travel."
      },
      {
        name: "Remote Prescription",
        details: "Healthcare professionals can prescribe medications remotely based on the virtual consultation. The prescriptions can be sent directly to a pharmacy of the patient's choice."
      },
      {
        name: "Follow-up Monitoring",
        details: "Follow-up consultations can be scheduled to monitor the patient's progress. This ensures that the treatment is effective and adjusts the treatment plan if necessary."
      },
      {
        name: "Referrals",
        details: "If necessary, healthcare professionals can provide referrals for further tests or specialist consultations. These referrals can be managed digitally."
      }
    ],
    note: "While virtual urgent care has made healthcare more accessible and convenient, it's important to note that some conditions may still require in-person visits. These could include conditions that require physical examination or emergency situations. Virtual urgent care complements traditional healthcare rather than replacing it entirely."
  },
  doctors: ["Dr. Maimuna Hassan", "Dr. Elizabeth Brown", "Dr. Fidel Simon"],
},
{
  name: "Teleconsultation for Chronic Conditions",
  history: "The management of chronic conditions has been transformed by the advent of telemedicine. Traditionally, managing chronic conditions involved regular in-person visits to healthcare providers, which could be inconvenient or challenging for some patients. With telemedicine, healthcare providers can monitor patients' health data remotely, provide virtual consultations, and adjust treatment plans without the need for physical travel.",
  image: chronicConditionImage,
  cure: {
    description: "Chronic conditions can be effectively managed through telemedicine methods. This involves a comprehensive approach that includes:",
    methods: [
      {
        name: "Virtual Consultations",
        details: "Patients can have video consultations with healthcare professionals for regular check-ups and discussion of symptoms. This allows for continuous monitoring and adjustment of treatment plans without the need for physical travel."
      },
      {
        name: "Remote Patient Monitoring",
        details: "Healthcare professionals can monitor patients' health data remotely using various digital devices. This can include tracking vital signs and symptom progression. Any significant changes can be flagged for immediate attention by the healthcare team."
      },
      {
        name: "Digital Health Technologies",
        details: "Digital platforms can provide educational resources about the chronic condition, treatment options, lifestyle modifications, and self-management strategies. They can also facilitate virtual support groups where patients can connect with others going through similar experiences."
      },
      {
        name: "Electronic Health Records (EHRs)",
        details: "EHRs ensure that all healthcare providers involved in a patient's care have access to the same information. This promotes coordinated care and helps avoid unnecessary repetition of diagnostic tests."
      }
    ],
    note: "While telemedicine has made the management of chronic conditions more accessible and convenient, it's important to note that some aspects of care may still require in-person visits. These could include diagnostic tests or certain treatments. Telemedicine is a powerful tool in chronic disease management, but it complements traditional healthcare rather than replacing it entirely."
  },
  doctors: ["Dr. Oyetunde Alagbe", "Dr. Akeem Mustapha", "Dr. Kehinde Sodimu"],
},
{
  name: "Mental Health",
  history: "The field of psychiatry has been significantly transformed by the advent of telemedicine. Traditionally, mental health services were provided through in-person consultations, which could be challenging for some patients due to stigma, logistical issues, or lack of local resources. With telemedicine, healthcare providers can offer mental health services remotely, making psychiatric care more accessible and convenient.",
  image: telepsychiatryImage,
  cure: {
    description: "Mental health concerns can be effectively managed through telemedicine methods. This involves a comprehensive approach that includes:",
    methods: [
      {
        name: "Virtual Consultations",
        details: "Patients can have video consultations with psychiatrists and other mental health professionals. This allows for regular check-ups, discussion of symptoms, and review of treatment plans without the need for physical travel."
      },
      {
        name: "Remote Therapy Sessions",
        details: "Therapy sessions can be conducted remotely using video conferencing tools. This includes individual therapy, group therapy, and family therapy sessions."
      },
      {
        name: "Digital Health Technologies",
        details: "Digital platforms can provide educational resources about various mental health conditions, treatment options, and self-care strategies. They can also facilitate virtual support groups where patients can connect with others going through similar experiences."
      },
      {
        name: "Electronic Prescription",
        details: "Healthcare professionals can prescribe medications remotely based on the virtual consultation. The prescriptions can be sent directly to a pharmacy of the patient's choice."
      }
    ],
    note: "While telemedicine has made mental health services more accessible and convenient, it's important to note that some aspects of care may still require in-person visits. These could include certain assessments or treatments that require physical presence. Telemedicine is a powerful tool in mental health care, but it complements traditional healthcare rather than replacing it entirely."
  },
  doctors: ["Dr. Emeka Orji", "Dr. Benjamin Olowojebutu", "Dr. Peter Ogunnubi"],
},
{
  name: "Neurology",
  history: "The field of neurology has been significantly transformed by the advent of telemedicine. Traditionally, neurological care involved in-person visits to healthcare providers, which could be challenging for some patients due to mobility issues or lack of local resources. With telemedicine, healthcare providers can offer neurological services remotely, making neurological care more accessible and convenient.",
  image: teleNeurologyImage,
  cure: {
    description: "Neurological conditions can be effectively managed through telemedicine methods. This involves a comprehensive approach that includes:",
    methods: [
      {
        name: "Virtual Consultations",
        details: "Patients can have video consultations with neurologists and other healthcare professionals for regular check-ups and discussion of symptoms. This allows for continuous monitoring and adjustment of treatment plans without the need for physical travel."
      },
      {
        name: "Remote Patient Monitoring",
        details: "Healthcare professionals can monitor patients' health data remotely using various digital devices. This can include tracking vital signs and symptom progression. Any significant changes can be flagged for immediate attention by the healthcare team."
      },
      {
        name: "Digital Health Technologies",
        details: "Digital platforms can provide educational resources about various neurological conditions, treatment options, lifestyle modifications, and self-management strategies. They can also facilitate virtual support groups where patients can connect with others going through similar experiences."
      },
      {
        name: "Electronic Prescription",
        details: "Healthcare professionals can prescribe medications remotely based on the virtual consultation. The prescriptions can be sent directly to a pharmacy of the patient's choice."
      }
    ],
    note: "While telemedicine has made neurological services more accessible and convenient, it's important to note that some aspects of care may still require in-person visits. These could include certain assessments or treatments that require physical presence. Telemedicine is a powerful tool in neurological care, but it complements traditional healthcare rather than replacing it entirely."
  },
  doctors: ["Dr. Hasiya Tijjani Ismail", "Dr. Ezunu Emma", "Dr. Steve Slick"],
},
{
  name: "Burn Treatment",
  history: "The field of burn treatment has been significantly transformed by the advent of telemedicine. Traditionally, burn treatment involved in-person visits to healthcare providers, which could be challenging for some patients due to mobility issues or lack of local resources. With telemedicine, healthcare providers can offer burn treatment services remotely, making burn care more accessible and convenient.",
  image: teleBurnTreatmentImage,
  cure: {
    description: "Burn treatment can be effectively managed through telemedicine methods. This involves a comprehensive approach that includes:",
    methods: [
      {
        name: "Virtual Consultations",
        details: "Patients can have video consultations with healthcare professionals for regular check-ups and discussion of symptoms. This allows for continuous monitoring and adjustment of treatment plans without the need for physical travel."
      },
      {
        name: "Remote Wound Monitoring",
        details: "Healthcare professionals can monitor patients' wounds remotely using various digital devices. This can include tracking wound healing progression. Any significant changes can be flagged for immediate attention by the healthcare team."
      },
      {
        name: "Digital Health Technologies",
        details: "Digital platforms can provide educational resources about burn care, treatment options, wound care techniques, and self-management strategies. They can also facilitate virtual support groups where patients can connect with others going through similar experiences."
      },
      {
        name: "Electronic Prescription",
        details: "Healthcare professionals can prescribe medications remotely based on the virtual consultation. The prescriptions can be sent directly to a pharmacy of the patient's choice."
      }
    ],
    note: "While telemedicine has made burn treatment more accessible and convenient, it's important to note that some aspects of care may still require in-person visits. These could include certain assessments or treatments that require physical presence. Telemedicine is a powerful tool in burn care, but it complements traditional healthcare rather than replacing it entirely."
  },
  doctors: ["Dr. Pius Ankpa", "Dr. Jane Daniel", "Dr. Sam James"],
}

];
