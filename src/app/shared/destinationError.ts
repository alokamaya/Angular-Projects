export class DestinationError {
  constructor(
    public errorCode: number,
    public errorFirendlyMessage: string,
    public errorMessage: string
  ) {}
}
