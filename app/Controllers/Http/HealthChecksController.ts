import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

export default class HealthChecksController {
  public async index({ response }) {
    const { report, healthy } = await HealthCheck.getReport()
    return healthy
      ? response.status(200).send(report)
      : response.status(400).send(report)
  }
}
