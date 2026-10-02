export type PlanId = 'free' | 'pro' | 'lifetime'

export const PLAN_LABELS: Record<PlanId, string> = {
  free: 'Miễn phí',
  pro: 'Pro',
  lifetime: 'Trọn đời',
}

/** No real payment/billing exists yet — this only records which pricing-table
 * button the user clicked, so signup/settings can display it back accurately.
 * Never treat this as proof of an actual paid subscription. */
export function parsePlan(value: string | null | undefined): PlanId {
  return value === 'pro' || value === 'lifetime' ? value : 'free'
}
