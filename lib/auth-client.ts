import { organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import {
  ac,
  admin,
  eventManager,
  member,
  owner,
  speaker,
  staff,
  volunteer,
} from "@/lib/auth/permissions";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  plugins: [
    organizationClient({
      ac,
      roles: {
        owner,
        admin,
        member,
        eventManager,
        staff,
        speaker,
        volunteer,
      },
    }),
  ],
});

export type AuthClient = typeof authClient;

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
  organization,
  resetPassword,
  verifyEmail,
  sendVerificationEmail,
} = authClient;
