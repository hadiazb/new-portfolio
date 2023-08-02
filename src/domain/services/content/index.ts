// repositories
import { contentRepository } from '@/infrastructure/repository/content'

export const contentService = {
    getMobileMenuOptions: async <T>() => contentRepository.getMobileMenuOptions<T>(),
}
