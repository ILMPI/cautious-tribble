import { notFound } from 'next/navigation'
import { fetchUserById } from '@/services/userService'
import { User } from '@/types/user'
import { Card } from '@/components/ui/card'
import { CopyButton } from '@/components/CopyButton'
import {
  Mail,
  Globe,
  MapPin,
  Building2,
} from 'lucide-react'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { PhoneNumber } from '@/components/PhoneNumber'

type UserPageProps = {
  params: Promise<{ id: string }>;
};

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;
  const userId = Number(id);

  if (isNaN(userId)) return notFound();

  let user: User | null = null;


  try {
    user = await fetchUserById(userId);
    if (!user || !user.id) return notFound();
  } catch (err) {
    console.error('Failed to fetch user:', err);
    return notFound();
  }

  const googleMapUrl = `https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`

  return (
    <main className="max-w-[700px] mx-auto px-4 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row gap-6 bg-muted/50 p-4 rounded-xl">
        <div className="flex flex-col gap-4 flex-1">
          <Card className="order-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
            <Avatar className="w-40 h-40">
              <AvatarImage alt={user.name} />
              <AvatarFallback className="text-6xl">
                {user.name?.charAt(0) ?? 'U'}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-center space-y-1">
              <p className="text-2xl font-bold leading-tight">{user.name ?? 'Unnamed'}</p>
              <div className="relative group inline-block">
                <p className="text-m font-mono text-muted-foreground">@{user.username ?? 'unknown'}</p>
                <CopyButton
                  text={user.username ?? ''}
                  className="absolute top-1/2 -translate-y-1/2 left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </Card>

          <Card className="order-2 p-6 text-m flex flex-col gap-2">
            <p className="flex items-center gap-2 group">
              {/* <Phone className="w-4 h-4" /> */}
              <span><PhoneNumber phone={user.phone ?? '—'} /></span>
              <CopyButton
                text={user.phone ?? ''}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </p>
            <p className="flex items-center gap-2 group">
              <Mail className="w-4 h-4" />
              <span>{user.email ?? '—'}</span>
              <CopyButton
                text={user.email ?? ''}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </p>
            <p className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <a
                href={`https://${user.website}`}
                target="_blank"
                className="text-blue-600 underline"
              >
                {user.website}
              </a>
            </p>
          </Card>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <Card className="order-4 sm:order-3 p-6 flex-1 space-y-6">
            <div className="flex items-start gap-2 group">
              <Building2 className="w-5 h-5 mt-0.5 text-muted-foreground" />
              <p className="text-xl font-bold">{user.company?.name ?? 'No Company'}</p>
              <CopyButton
                text={user.company?.name ?? ''}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </div>
            {user.company?.bs && (
              <p className="text-center text-base text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
                Specialize in {user.company.bs}.
              </p>
            )}
            {user.company?.catchPhrase && (
              <p className="text-right text-xl italic font-serif text-muted-foreground">
                “{user.company.catchPhrase}”
              </p>
            )}
          </Card>

          <Card className="order-3 sm:order-4 p-6 text-base flex-0 items-center justify-center cursor-pointer hover:bg-accent transition-colors">
            <a
              href={googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in Google Maps"
              className="flex items-center gap-4 text-left"
            >
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <div className="space-y-1 leading-snug">
                <p>{user.address?.street}, {user.address?.suite}</p>
                <p>{user.address?.city},</p>
                <p>{user.address?.zipcode}</p>
              </div>
            </a>
          </Card>
        </div>
      </div>
    </main>
  )
}
