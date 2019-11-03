export class Destination {
  constructor(
    public destinationName: string,
    public description?: string,
    public travelDate?: Date,
    public photoUrls?: string[]
  ) {}
}
