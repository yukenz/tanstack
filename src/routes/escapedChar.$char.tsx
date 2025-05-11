import {createFileRoute, Navigate} from '@tanstack/react-router'
import {Route as portal} from '@/routes/portal/index'

export const Route = createFileRoute('/escapedChar/$char')({
  component: RouteComponent,
})

function RouteComponent() {
    const {char} = Route.useParams();
  return<p>{char}</p>

}
