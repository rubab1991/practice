export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)


export const token = assertValue(
 "skqqz3yxEW1k0Awr0jcfnymdScljbI1qIfPvQTYZFNWeodVHgja10puzOxpbKgOvS17ne8TVkm40DNa0MKTu6RwjBjdzt6EnYi9zPLLcmQGlWoN9Y8rbaBZVeYqVeu8vz0qe64wDjifIxEraWL7Fy4WMEhpSXfEYtpawxkAYWjvyarj6K1MO",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)




function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
