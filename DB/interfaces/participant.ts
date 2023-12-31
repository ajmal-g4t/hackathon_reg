export interface IParticipant {
  memberName: string;
  email: string;
  phone: string;
  organization: string;
  usn: string;
  semester: number;
  dob: Date;
}
export interface ITeam {
  teamName: string;
  teamSize: number;
  teamMembers: IParticipant[];
  payment?: boolean;
  transactionId?: string;
  createdAt: Date;
  paymentAt: Date | null;
}
