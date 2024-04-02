import { URL_API } from "@/utils/constants"

function analisarDados(dados: any[]) {

  const chaves = Object?.keys(dados);
  const valores = Object?.values(dados);

  const arrayDeDatasFormatadas = chaves.map(data => {
    const [ano, mes, dia] = data.split('T')[0].split('-'); // Divide a parte da data no caractere '-'
    return `${dia}-${mes}-${ano}`; // Reorganiza as partes no formato 'DD-MM-YYYY'
  });

  // Extrair apenas os minutos
  const arrayMinutos = valores.map(valor => valor.split(':')[1]);
  const arrayDeValores = arrayMinutos.map(valor => parseInt(valor, 10))

  // Extrair apenas as horas
  // const arrayDeValores = valores.map(valor => valor.split(':')[0]);

  return {
    arrayDeDatasFormatadas,
    arrayDeValores
  }
}

export default async function CompressorLogs(idCompressor: string) {

  // ----------------------------------------------------


  const resp = await fetch(`${URL_API}/compressors/${idCompressor}/logs`, {
    next: {
      revalidate: 300,
    },
  })

  if (!resp.ok) {
    throw new Error('Failed to fetch data')
  }

  const resposta = await resp.json()
  const eletricalSwitching = resposta.hour_electrical_switching_count
  const workedHours: number = resposta.total_runtime
  const percent_lifespan: number = resposta.percent_lifespan
  const on_motor: boolean = resposta.is_motor_on

  const daily_runtime_accumulated = resposta.daily_runtime_accumulated;


  const arrayDailyRuntimeAccumulated = analisarDados(daily_runtime_accumulated);

  // ----------------------------------------------

  const daily_runtimes = resposta.daily_runtime;
  const arrayDailyRuntimes = analisarDados(daily_runtimes);

  return {
    eletricalSwitching,
    workedHours,
    percent_lifespan,
    arrayDailyRuntimeAccumulated,
    arrayDailyRuntimes,
    on_motor
  }
}
