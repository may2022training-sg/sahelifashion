import { ReactNode } from 'react'
import { siteConfig } from '@/config/site'
import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  message: string
  label?: string
  className?: string
  icon?: ReactNode
}

export function WhatsAppButton({
  message,
  label = 'WhatsApp Enquiry',
  className = '',
  icon,
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon ? icon : <MessageCircle className="w-5 h-5 mr-2 shrink-0" />}
      <span>{label}</span>
    </a>
  )
}