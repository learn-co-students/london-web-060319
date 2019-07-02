class DoctorsController < ApplicationController

    def new
        if flash[:doctor_params]
            @doctor = Doctor.create flash[:doctor_params]
            flash[:doctor_params] = nil
        else
            @doctor = Doctor.new
        end
    end

    def create
        @doctor = Doctor.create doctor_params
        if @doctor.valid?
            redirect_to @doctor
        else
            flash[:errors] = @doctor.errors.full_messages
            # render :new   - not nice because now the URL is /doctors not /doctors/new
            flash[:doctor_params] = doctor_params # not nice because it feels kinda hacky, and new needs the logic, too
            redirect_to new_doctor_path
        end
    end

    def index
        @doctors = Doctor.all
    end

    def show
        @doctor = Doctor.find params[:id]
    end

    def destroy
        doctor = Doctor.find params[:id]
        doctor.destroy
        flash[:notice] = "Doctor #{doctor.name} succcessfully deleted"
        redirect_to doctors_path
    end

    private

    def doctor_params
        params.require(:doctor).permit(:name, :speciality)
    end
end
