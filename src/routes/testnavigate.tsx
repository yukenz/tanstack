import {createFileRoute, Navigate} from '@tanstack/react-router'
import {Route as portal} from '@/routes/portal/index'

export const Route = createFileRoute('/testnavigate')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Navigate to={portal.to} />

}
