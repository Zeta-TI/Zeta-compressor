import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CrossCircledIcon,
  } from "@radix-ui/react-icons"
  
  export const labels = [
    {
      value: "manutencao",
      label: "Manutenção",
    },
    {
      value: "controle",
      label: "Controle",
    },
    // {
    //   value: "documentation",
    //   label: "Documentation",
    // },
  ]
  
  export const statuses = [
    {
      value: "desligado",
      label: "Desligado",
      icon: CrossCircledIcon,
    },
    {
      value: "ligado",
      label: "Ligado",
      icon: CheckCircledIcon,
    },
  ]

  const isoString = "2024-03-07T12:30:00Z";
  const dataAtual = new Date(isoString).toLocaleString('pt-BR')

  export const priorities = [
    {
      label: dataAtual.toString(),
      value: '2024-03-07T12:30:00Z',
      icon: ArrowDownIcon,
    },
    {
      label: "Média",
      value: '2024-03-07T12:30:00Z',
      icon: ArrowRightIcon,
    },
    {
      label: "Alta",
      value: '2024-03-07T12:30:00Z',
      icon: ArrowUpIcon,
    },
  ]